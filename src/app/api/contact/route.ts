import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    // Log structured data (replace with email service in production)
    console.log("=== Nuevo mensaje de contacto ===");
    console.log(JSON.stringify(data, null, 2));

    // TODO: Integrate with Resend when API key is available
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Contacto <contacto@jesusartemio.dev>',
    //   to: ['jesus@jesusartemio.dev'],
    //   subject: `Nuevo contacto: ${data.name} - ${data.company}`,
    //   html: `...`,
    // });

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
