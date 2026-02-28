import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | Jesús A. Mamani - Solicita una Demo o Consulta",
  description:
    "Contacta a Jesús A. Mamani para servicios de automatización industrial y desarrollo web. Solicita una demo o agenda una llamada.",
  openGraph: {
    title: "Contacto | Jesús A. Mamani",
    description: "Envía un mensaje o agenda una llamada para tu proyecto industrial.",
    url: "https://jesusartemio.dev/contacto",
  },
};

export default function Contacto() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold mb-4 text-center text-[#0a0f1e]">Contacto</h1>
      <p className="text-center text-[#5a6270] mb-10 max-w-lg mx-auto">
        ¿Interesado en mis servicios? Envía un mensaje y conversemos sobre tu proyecto.
      </p>

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-center mt-12 space-y-4">
          <p className="text-[#5a6270] font-medium">¿Prefieres contacto directo?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#0ea86a] hover:bg-[#0c9058] rounded-xl text-base px-8 h-12 shadow-lg shadow-[#0ea86a]/25">
              <Link href="https://wa.me/51950307588?text=Hola%20Jes%C3%BAs%2C%20me%20interesa%20una%20soluci%C3%B3n%20web%20industrial.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-xl text-base px-8 h-12 border-[#1847c2] text-[#1847c2] hover:bg-[#1847c2] hover:text-white transition-colors">
              <Link href="https://calendly.com/jesusartemio/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar llamada
              </Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
