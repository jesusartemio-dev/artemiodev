import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(apiKey);
}

// Rate limiting (in-memory)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nombre debe tener al menos 2 caracteres")
    .max(100, "Nombre demasiado largo")
    .transform(stripHtml),
  company: z
    .string()
    .min(2, "Empresa debe tener al menos 2 caracteres")
    .max(100, "Empresa demasiado largo")
    .transform(stripHtml),
  email: z
    .string()
    .email("Email inválido")
    .max(254, "Email demasiado largo"),
  phone: z
    .string()
    .max(20, "Teléfono demasiado largo")
    .optional()
    .transform((val) => (val ? stripHtml(val) : val)),
  urgency: z.enum(["evaluation", "month", "week"], {
    error: "Urgencia inválida",
  }),
  message: z
    .string()
    .min(10, "Mensaje debe tener al menos 10 caracteres")
    .max(2000, "Mensaje demasiado largo")
    .transform(stripHtml),
  nda: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "RATE_LIMITED", message: "Demasiadas solicitudes. Intenta en un minuto." },
        { status: 429 }
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "INVALID_JSON", message: "El cuerpo de la solicitud no es JSON válido." },
        { status: 400 }
      );
    }

    // Validate
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "VALIDATION_ERROR", message: "Datos inválidos", fields: fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const urgencyLabels: Record<string, string> = {
      evaluation: "En evaluación",
      month: "Este mes",
      week: "Esta semana",
    };

    await getResend().emails.send({
      from: "onboarding@resend.dev",
      to: ["jesusartemiodev@gmail.com"],
      subject: `Nuevo contacto desde artemiodev.com: ${data.name} - ${data.company}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || "No proporcionado"}</p>
        <p><strong>Urgencia:</strong> ${urgencyLabels[data.urgency] || data.urgency}</p>
        <p><strong>NDA:</strong> ${data.nda ? "Sí, solicita NDA" : "No"}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente",
    });
  } catch (error) {
    console.error("Error en API contact:", error);
    return NextResponse.json(
      { error: "INTERNAL_ERROR", message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
