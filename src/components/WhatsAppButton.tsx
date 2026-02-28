import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "51950307588";
  const message = encodeURIComponent(
    "Hola Jesús, me interesa una solución web industrial. ¿Podemos hablar?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#0ea86a] hover:bg-[#0c9058] text-white p-3.5 rounded-2xl shadow-lg shadow-[#0ea86a]/30 transition-all z-40 min-w-[52px] min-h-[52px] flex items-center justify-center hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </Link>
  );
}
