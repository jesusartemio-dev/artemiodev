"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nombre requerido").max(100, "Máximo 100 caracteres"),
  company: z.string().min(2, "Empresa requerida").max(100, "Máximo 100 caracteres"),
  email: z.string().email("Email inválido").max(254, "Email demasiado largo"),
  phone: z.string().max(20, "Máximo 20 caracteres").optional(),
  urgency: z.string().min(1, "Selecciona urgencia"),
  message: z
    .string()
    .min(10, "Mensaje debe tener al menos 10 caracteres")
    .max(2000, "Máximo 2000 caracteres"),
  nda: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const nda = watch("nda");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        reset();
        toast.success("Mensaje enviado exitosamente", {
          description: "Te responderé lo antes posible.",
        });
      } else if (response.status === 429) {
        toast.error("Demasiadas solicitudes", {
          description: "Espera un momento antes de intentar de nuevo.",
        });
      } else if (result.error === "VALIDATION_ERROR") {
        toast.error("Datos inválidos", {
          description: "Revisa los campos del formulario.",
        });
      } else {
        toast.error("Error al enviar el mensaje", {
          description: "Intenta de nuevo más tarde.",
        });
      }
    } catch {
      toast.error("Error de conexión", {
        description: "Verifica tu conexión a internet.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto rounded-2xl border-[#e2e6ee]">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#e6f9f0] flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-[#0ea86a]" />
          </div>
          <p className="text-[#0ea86a] font-bold text-lg">
            ¡Mensaje enviado exitosamente!
          </p>
          <p className="text-[#5a6270] mt-2">Te responderé lo antes posible.</p>
          <Button
            variant="outline"
            className="mt-4 rounded-xl border-[#e2e6ee]"
            onClick={() => setSubmitted(false)}
          >
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto rounded-2xl border-[#e2e6ee] shadow-sm">
      <CardHeader>
        <CardTitle className="text-[#0a0f1e]">Contáctame</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[#0a0f1e] mb-1">
              Nombre <span aria-hidden="true">*</span>
            </label>
            <Input
              id="contact-name"
              placeholder="Tu nombre completo"
              maxLength={100}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-company" className="block text-sm font-medium text-[#0a0f1e] mb-1">
              Empresa <span aria-hidden="true">*</span>
            </label>
            <Input
              id="contact-company"
              placeholder="Nombre de la empresa"
              maxLength={100}
              aria-describedby={errors.company ? "company-error" : undefined}
              aria-invalid={!!errors.company}
              {...register("company")}
            />
            {errors.company && (
              <p id="company-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-[#0a0f1e] mb-1">
              Email <span aria-hidden="true">*</span>
            </label>
            <Input
              id="contact-email"
              type="email"
              placeholder="tu@empresa.com"
              maxLength={254}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-[#0a0f1e] mb-1">
              Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
            </label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+51 999 888 777"
              maxLength={20}
              {...register("phone")}
            />
          </div>

          <div>
            <label htmlFor="contact-urgency" className="block text-sm font-medium text-[#0a0f1e] mb-1">
              Urgencia del proyecto <span aria-hidden="true">*</span>
            </label>
            <Select onValueChange={(value) => setValue("urgency", value)}>
              <SelectTrigger
                id="contact-urgency"
                aria-describedby={errors.urgency ? "urgency-error" : undefined}
                aria-invalid={!!errors.urgency}
              >
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="evaluation">En evaluación</SelectItem>
                <SelectItem value="month">Este mes</SelectItem>
                <SelectItem value="week">Esta semana</SelectItem>
              </SelectContent>
            </Select>
            {errors.urgency && (
              <p id="urgency-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.urgency.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-[#0a0f1e] mb-1">
              Mensaje <span aria-hidden="true">*</span>
            </label>
            <Textarea
              id="contact-message"
              placeholder="Describe tu proyecto o necesidad..."
              maxLength={2000}
              rows={5}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="contact-nda"
                checked={nda}
                onCheckedChange={(checked) => setValue("nda", !!checked)}
              />
              <label htmlFor="contact-nda" className="text-sm text-[#0a0f1e]">
                Solicitar NDA antes de compartir detalles
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-6">
              (Acuerdo de confidencialidad para proteger la información de tu proyecto)
            </p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1847c2] hover:bg-[#1339a0] rounded-xl h-11"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
