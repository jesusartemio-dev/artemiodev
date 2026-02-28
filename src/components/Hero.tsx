import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Clock, Headphones, Calendar } from "lucide-react";

const kpis = [
  {
    icon: TrendingDown,
    value: "-20%",
    label: "Paros no planificados",
    color: "text-[#0ea86a]",
  },
  {
    icon: TrendingUp,
    value: "+15%",
    label: "Rendimiento OEE",
    color: "text-[#0ea86a]",
  },
  {
    icon: Clock,
    value: "<4 sem",
    label: "MVP operativo",
    color: "text-[#1847c2]",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Soporte opcional",
    color: "text-[#1847c2]",
  },
];

const gauges = [
  { label: "OEE", value: 78, color: "#1847c2" },
  { label: "Disp", value: 82, color: "#0ea86a" },
  { label: "Rend", value: 100, color: "#0ea86a" },
  { label: "Cal", value: 95, color: "#0ea86a" },
];

function OEEDashboardMockup() {
  return (
    <div className="animate-float bg-[#0f172a] rounded-2xl p-5 shadow-2xl shadow-black/30 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">OEE Dashboard</span>
        <span className="flex items-center gap-1.5 text-xs text-[#0ea86a] font-medium">
          <span className="w-1.5 h-1.5 bg-[#0ea86a] rounded-full animate-pulse-dot" />
          RUNNING · L01
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {gauges.map((g) => {
          const circumference = 2 * Math.PI * 28;
          const offset = circumference - (g.value / 100) * circumference;
          return (
            <div key={g.label} className="flex flex-col items-center gap-1">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#1e293b" strokeWidth="5" />
                  <circle
                    cx="32" cy="32" r="28" fill="none"
                    stroke={g.color}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                  {g.value}%
                </span>
              </div>
              <span className="text-[10px] font-medium text-white/60 uppercase">{g.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="py-16 md:py-24 -mx-6 px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column — text */}
        <div>
          <Badge className="mb-6 bg-[#e6f9f0] text-[#0ea86a] border-[#0ea86a]/20 hover:bg-[#d1f5e6] rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="w-2 h-2 bg-[#0ea86a] rounded-full inline-block mr-2 animate-pulse-dot" />
            Disponible para proyectos · Lima, Perú
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] mb-6 text-[#0a0f1e]">
            Conecto tu{" "}
            <span className="text-[#1847c2]">planta industrial</span>{" "}
            con soluciones web que generan resultados
          </h1>

          <p className="text-lg text-[#5a6270] mb-8 max-w-xl leading-relaxed">
            Ingeniero electrónico con +10 años en automatización. Desarrollo aplicaciones
            que transforman datos operativos en decisiones de negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#1847c2] hover:bg-[#1339a0] shadow-lg shadow-[#1847c2]/25 rounded-xl text-base px-8 h-12">
              <Link href="/contacto">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse-dot mr-2" />
                Solicitar demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-xl text-base px-8 h-12 border-[#e2e6ee] hover:bg-[#f4f6f9]">
              <Link href="https://calendly.com/jesusartemio/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar llamada
              </Link>
            </Button>
          </div>
        </div>

        {/* Right column — OEE dashboard mockup */}
        <div className="flex justify-center lg:justify-end">
          <OEEDashboardMockup />
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="border-[#e2e6ee] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6 pb-4 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f0f4ff] flex items-center justify-center">
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className={`text-2xl md:text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
              <p className="text-sm text-[#5a6270]">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
