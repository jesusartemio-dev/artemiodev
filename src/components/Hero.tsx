import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const kpis = [
  { value: "-20%", label: "Paros no planificados" },
  { value: "+15%", label: "Rendimiento OEE" },
  { value: "<4 sem", label: "MVP operativo" },
  { value: "24/7", label: "Soporte opcional" },
];

const gauges = [
  { label: "OEE", value: 78, color: "#1847c2" },
  { label: "Disp", value: 82, color: "#0ea86a" },
  { label: "Rend", value: 100, color: "#0ea86a" },
  { label: "Cal", value: 95, color: "#0ea86a" },
];

function OEEDashboardMockup() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
      {/* Browser window wrapper */}
      <div
        className="rounded-2xl overflow-hidden lg:[transform:perspective(1000px)_rotateY(-5deg)] transition-transform duration-500"
        style={{
          boxShadow: "0 32px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(24,71,194,0.1)",
        }}
      >
        {/* Browser bar */}
        <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#eab308]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
          </div>
          <div className="flex-1 bg-[#0f172a] rounded-md px-3 py-1 text-[11px] text-white/40 font-mono text-center">
            demo.artemiodev.com
          </div>
        </div>

        {/* Dashboard content */}
        <div className="animate-float bg-[#0f172a] p-5">
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
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16">
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
                    <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-white">
                      {g.value}%
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-white/60 uppercase">{g.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating badges — hidden on mobile */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-black/10 px-3 py-2 text-xs font-semibold text-[#0a0f1e] hidden lg:flex items-center gap-1.5 border border-[#e2e6ee]">
        <span className="text-sm">⚡</span> Actualización en tiempo real
      </div>
      <div className="absolute -top-3 -right-3 bg-[#0ea86a] text-white rounded-full shadow-lg shadow-[#0ea86a]/30 px-3 py-1.5 text-xs font-bold hidden lg:flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-dot" />
        En producción · L01
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff]">
      {/* Dot grid pattern — right half only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1847c2 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.06,
          maskImage: "linear-gradient(to right, transparent 30%, black 70%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 30%, black 70%)",
        }}
      />

      {/* Blob top-right — blue */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "#1847c2",
          opacity: 0.07,
          filter: "blur(80px)",
        }}
      />

      {/* Blob bottom-left — green */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "#0ea86a",
          opacity: 0.07,
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">
          {/* Left column — text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 mb-7 bg-white border-2 border-[#1847c2]/15 rounded-full px-4 py-2 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ripple absolute inset-0 rounded-full bg-[#0ea86a]/60" />
                <span className="relative rounded-full h-3 w-3 bg-[#0ea86a]" />
              </span>
              <span className="text-sm font-semibold text-[#0a0f1e]">
                Disponible para proyectos · Lima, Perú
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-extrabold text-[#0a0f1e] mb-6"
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                lineHeight: 1.05,
              }}
            >
              Conecto tu{" "}
              <span
                className="animate-gradient-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #1847c2, #0ea86a, #1847c2)",
                }}
              >
                planta industrial
              </span>{" "}
              con soluciones web que generan resultados
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#4b5563] mb-8 max-w-[480px] leading-relaxed">
              Ingeniero electrónico con +18 años en automatización. Desarrollo aplicaciones
              que transforman datos operativos en decisiones de negocio.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1847c2] hover:bg-[#1339a0] rounded-xl text-base font-semibold px-8 h-[52px] min-h-[44px] hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  boxShadow: "0 4px 24px rgba(24,71,194,0.35)",
                }}
              >
                <Link href="/contacto">
                  <span className="relative flex h-2 w-2 mr-2.5">
                    <span className="animate-ripple absolute inset-0 rounded-full bg-white/60" />
                    <span className="relative rounded-full h-2 w-2 bg-white" />
                  </span>
                  Solicitar demo
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white border-2 border-[#e5e7eb] hover:border-[#1847c2] rounded-xl text-base font-semibold px-8 h-[52px] min-h-[44px] transition-all duration-200"
              >
                <Link href="https://calendly.com/jesusartemio/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar llamada
                </Link>
              </Button>
            </div>

            {/* KPIs — inline row */}
            <div className="mt-10 pt-8 border-t border-[#e2e6ee]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
                {kpis.map((kpi, i) => (
                  <div
                    key={kpi.label}
                    className={`flex flex-col md:items-center ${i > 0 ? "md:border-l md:border-[#e2e6ee]" : ""}`}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-[#1847c2]">{kpi.value}</p>
                    <p className="text-xs sm:text-sm text-[#5a6270] mt-0.5">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — OEE dashboard mockup */}
          <div className="flex justify-center lg:justify-end w-full">
            <OEEDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
