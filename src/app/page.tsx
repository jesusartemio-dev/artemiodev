import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import OEEBox from "@/components/OEEBox";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import CaseCard from "@/components/CaseCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { caseStudies } from "@/data/portfolio";

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6">
        <Hero />

        <ScrollReveal>
          <TrustSection />
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-16">
            <h2 className="text-3xl font-extrabold text-center text-[#0a0f1e] mb-3">Experiencia en Automatización y Control</h2>
            <p className="text-center text-[#5a6270] mb-10 max-w-2xl mx-auto">
              Más de una década conectando la planta con la toma de decisiones.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-[#e2e6ee] bg-white p-6">
                <h3 className="font-bold text-lg text-[#0a0f1e] mb-3">Experiencia técnica</h3>
                <ul className="space-y-2">
                  {[
                    "Programación de PLCs Allen-Bradley, Siemens y Schneider Electric.",
                    "Diseño y configuración de sistemas SCADA y control distribuido.",
                    "Integración de datos industriales vía OPC UA, Modbus y MQTT.",
                    "Automatización de líneas de producción y puesta en marcha en planta.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#5a6270]">
                      <span className="w-1.5 h-1.5 bg-[#1847c2] rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#e2e6ee] bg-white p-6">
                <h3 className="font-bold text-lg text-[#0a0f1e] mb-3">Integración OT/IT</h3>
                <ul className="space-y-2">
                  {[
                    "Conexión de PLCs y servidores Historian con bases de datos PostgreSQL.",
                    "Desarrollo de dashboards de producción y OEE en tiempo real.",
                    "Digitalización de procesos industriales e integración con sistemas ERP.",
                    "Implementación de soluciones Industria 4.0 para trazabilidad y eficiencia.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#5a6270]">
                      <span className="w-1.5 h-1.5 bg-[#0ea86a] rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services preview */}
        <ScrollReveal>
          <section className="py-16">
            <h2 className="text-3xl font-extrabold text-center text-[#0a0f1e] mb-3">Servicios</h2>
            <p className="text-center text-[#5a6270] mb-10 max-w-2xl mx-auto">
              Soluciones de desarrollo web industrial adaptadas a tu operación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* OEE Box — full width */}
      <ScrollReveal>
        <OEEBox />
      </ScrollReveal>

      <div className="max-w-6xl mx-auto px-6">
        {/* Portfolio preview */}
        <ScrollReveal>
          <section className="py-16">
            <h2 className="text-3xl font-extrabold text-center text-[#0a0f1e] mb-3">Casos de Éxito</h2>
            <p className="text-center text-[#5a6270] mb-10 max-w-2xl mx-auto">
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
          <section className="text-center py-20">
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
    </div>
  );
}
