import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import OEEBox from "@/components/OEEBox";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import CaseCard from "@/components/CaseCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { caseStudies } from "@/data/portfolio";

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />

        <ScrollReveal>
          <TrustSection />
        </ScrollReveal>

        {/* Services preview */}
        <ScrollReveal>
          <section className="py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0a0f1e] mb-3">Servicios</h2>
            <p className="text-center text-sm sm:text-base text-[#5a6270] mb-8 sm:mb-10 max-w-2xl mx-auto">
              Soluciones de desarrollo web industrial adaptadas a tu operación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={service.title} className={i === services.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto" : ""}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* OEE Box — full width */}
      <ScrollReveal>
        <OEEBox />
      </ScrollReveal>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Portfolio preview */}
        <ScrollReveal>
          <section className="py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0a0f1e] mb-3">Casos de Éxito</h2>
            <p className="text-center text-sm sm:text-base text-[#5a6270] mb-8 sm:mb-10 max-w-2xl mx-auto">
              Proyectos reales con resultados medibles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy) => (
                <CaseCard key={caseStudy.title} caseStudy={caseStudy} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal>
          <section className="text-center py-16 sm:py-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0a0f1e] mb-4">¿Conectamos tu planta con el negocio?</h2>
            <p className="text-sm sm:text-base text-[#5a6270] mb-6 max-w-2xl mx-auto">
              Pídeme un MVP con tus datos operativos reales. Desarrollo soluciones que generan resultados medibles.
            </p>

            {/* Phone number */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Phone className="w-5 h-5 text-[#1847c2]" />
              <Link href="tel:+51950307588" className="text-lg sm:text-xl font-bold text-[#0a0f1e] hover:text-[#1847c2] transition-colors">
                +51 950 307 588
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0ea86a] hover:bg-[#0c9058] shadow-lg shadow-[#0ea86a]/25 rounded-xl text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 min-h-[44px] w-full sm:w-auto">
                <Link href="https://wa.me/51950307588?text=Hola%20Jes%C3%BAs%2C%20me%20interesa%20una%20soluci%C3%B3n%20web%20industrial.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#1847c2] hover:bg-[#1339a0] shadow-lg shadow-[#1847c2]/25 rounded-xl text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 min-h-[44px] w-full sm:w-auto">
                <Link href="https://calendly.com/jesusartemio/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar llamada
                </Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
