import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { skills, experience, courses } from "@/data/about";

export const metadata: Metadata = {
  title: "Sobre mí | Jesús A. Mamani - Ingeniero Electrónico y Full-Stack OT/IT",
  description:
    "Conoce la experiencia y habilidades de Jesús A. Mamani: ingeniero electrónico, especialista en automatización industrial y desarrollador full-stack.",
  openGraph: {
    title: "Sobre mí | Jesús A. Mamani",
    description:
      "Ingeniero electrónico con experiencia en automatización industrial y desarrollo web.",
    url: "https://jesusartemio.dev/sobre-mi",
  },
};

const categoryLabels: Record<string, string> = {
  web: "Desarrollo Web",
  industrial: "Industrial / OT",
  infra: "Infraestructura",
};

const categoryColors: Record<string, string> = {
  web: "bg-[#f0f4ff] text-[#1847c2]",
  industrial: "bg-amber-50 text-amber-600",
  infra: "bg-purple-50 text-purple-600",
};

const topSkills = [
  { name: "Next.js / React", level: 95 },
  { name: "PLC Programming", level: 90 },
  { name: "OPC UA / MQTT", level: 88 },
  { name: "PostgreSQL", level: 85 },
];

export default function SobreMi() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Profile card */}
      <ScrollReveal>
        <div className="flex flex-col items-center mb-16">
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#1847c2] to-[#0ea86a] flex items-center justify-center mb-5 shadow-lg shadow-[#1847c2]/20">
            <span className="text-3xl font-extrabold text-white">JAM</span>
          </div>
          <h1 className="text-3xl font-extrabold text-center text-[#0a0f1e] mb-3">Sobre mí</h1>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge className="bg-amber-50 text-amber-700 border-amber-200 rounded-full px-3 py-1 text-xs font-semibold">
              PLC Expert
            </Badge>
            <Badge className="bg-[#f0f4ff] text-[#1847c2] border-[#1847c2]/20 rounded-full px-3 py-1 text-xs font-semibold">
              OEE Box Creator
            </Badge>
            <Badge className="bg-[#e6f9f0] text-[#0ea86a] border-[#0ea86a]/20 rounded-full px-3 py-1 text-xs font-semibold">
              Full-Stack OT/IT
            </Badge>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-14">
        {/* Bio */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-bold text-[#0a0f1e] mb-4">Bio Profesional</h2>
            <p className="text-[#5a6270] leading-relaxed">
              Soy <strong className="text-[#0a0f1e]">Jesús Artemio Mamani</strong>, ingeniero electrónico y desarrollador full-stack con más de una década de experiencia en <strong className="text-[#0a0f1e]">automatización y control industrial</strong>.
              He trabajado en proyectos para minería, energía, siderurgia y manufactura, integrando PLCs, SCADAs y sistemas industriales con plataformas web modernas.
            </p>
            <p className="text-[#5a6270] leading-relaxed mt-4">
              Mi especialidad es la convergencia <strong className="text-[#0a0f1e]">OT/IT</strong>: conectar datos de planta con aplicaciones web, dashboards de producción, OEE y sistemas de gestión.
              Utilizo tecnologías como <strong className="text-[#0a0f1e]">Next.js, Node.js, PostgreSQL, OPC UA y MQTT</strong> para transformar datos operativos en información estratégica para la toma de decisiones.
            </p>
          </section>
        </ScrollReveal>

        {/* Top skills with bars */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-bold text-[#0a0f1e] mb-6">Top Skills</h2>
            <div className="space-y-4">
              {topSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#0a0f1e]">{skill.name}</span>
                    <span className="text-sm font-bold text-[#1847c2]">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-[#f0f4ff] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1847c2] to-[#0ea86a]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-bold text-[#0a0f1e] mb-6">Trayectoria</h2>
            <div className="relative border-l-2 border-[#1847c2]/20 ml-4 space-y-8">
              {experience.map((exp) => (
                <div key={exp.year} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1847c2] border-2 border-white shadow" />
                  <p className="text-sm font-bold text-[#1847c2]">{exp.year}</p>
                  <h3 className="font-semibold text-lg text-[#0a0f1e] mt-1">{exp.title}</h3>
                  <p className="text-sm text-[#5a6270] mt-1 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Skills by category */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-bold text-[#0a0f1e] mb-6">Habilidades Técnicas</h2>
            <div className="space-y-6">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-xs font-semibold text-[#5a6270] uppercase tracking-widest mb-3">
                    {categoryLabels[category] ?? category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {categorySkills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <Card key={skill.name} className="border-[#e2e6ee] rounded-xl hover:shadow-md transition-shadow">
                          <CardContent className="flex items-center gap-3 py-3 px-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${categoryColors[skill.category] ?? "bg-[#f4f6f9] text-[#5a6270]"}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium text-[#0a0f1e]">{skill.name}</span>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Courses */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl font-bold text-[#0a0f1e] mb-4">Cursos y Certificaciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courses.map((course) => (
                <div key={course.name} className="flex items-start gap-3 p-4 rounded-xl bg-[#f4f6f9] border border-[#e2e6ee]">
                  <GraduationCap className="w-5 h-5 text-[#1847c2] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#0a0f1e]">{course.name}</p>
                    <p className="text-xs text-[#5a6270]">{course.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <section className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-bold text-[#0a0f1e]">¿Trabajamos juntos?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#0ea86a] hover:bg-[#0c9058] rounded-xl text-base px-8 h-12 shadow-lg shadow-[#0ea86a]/25">
                <Link href="https://wa.me/51950307588?text=Hola%20Jes%C3%BAs%2C%20me%20interesa%20una%20soluci%C3%B3n%20web%20industrial.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl text-base px-8 h-12 border-[#e2e6ee] hover:bg-[#f4f6f9]">
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
