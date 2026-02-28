import type { Metadata } from "next";
import CaseCard from "@/components/CaseCard";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Jesús A. Mamani - Proyectos de Automatización Industrial",
  description:
    "Casos de éxito en automatización industrial: monitoreo OEE, integración PLC-Historian, trazabilidad web.",
  openGraph: {
    title: "Portfolio | Jesús A. Mamani",
    description:
      "Proyectos reales de integración OT/IT, automatización y desarrollo web industrial.",
    url: "https://jesusartemio.dev/portfolio",
  },
};

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold mb-3 text-center text-[#0a0f1e]">Portfolio</h1>
      <p className="text-center text-[#5a6270] mb-10 max-w-lg mx-auto">
        Proyectos reales con resultados medibles en automatización industrial.
      </p>

      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <CaseCard key={caseStudy.title} caseStudy={caseStudy} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
