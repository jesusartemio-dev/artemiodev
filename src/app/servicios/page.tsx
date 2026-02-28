import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios | Jesús A. Mamani - Desarrollo Web Industrial OT/IT",
  description:
    "Servicios de desarrollo web industrial: aplicaciones OT/IT, monitoreo OEE, integración de datos, sistemas B2B y consultoría.",
  openGraph: {
    title: "Servicios | Jesús A. Mamani",
    description:
      "Desarrollo de aplicaciones web industriales, monitoreo OEE y consultoría en automatización.",
    url: "https://jesusartemio.dev/servicios",
  },
};

export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold mb-3 text-center text-[#0a0f1e]">Servicios</h1>
      <p className="text-center text-[#5a6270] mb-10 max-w-lg mx-auto">
        Soluciones de desarrollo web industrial adaptadas a tu operación.
      </p>

      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mt-16 text-center py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a0f1e] mb-4">¿Conectamos tu planta con el negocio?</h2>
          <p className="text-[#5a6270] mb-8 max-w-2xl mx-auto">
            Pídeme un MVP con tus datos operativos reales. Desarrollo soluciones que generan resultados medibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0ea86a] hover:bg-[#0c9058] shadow-lg shadow-[#0ea86a]/25 rounded-xl text-base px-8 h-12">
              <Link href="https://wa.me/51950307588?text=Hola%20Jes%C3%BAs%2C%20me%20interesa%20una%20soluci%C3%B3n%20web%20industrial.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-xl text-base px-8 h-12 border-[#1847c2] text-[#1847c2] hover:bg-[#1847c2] hover:text-white transition-colors">
              <Link href="https://calendly.com/jesusartemio/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar llamada
              </Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
