import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Conecta con PLCs Siemens, Allen-Bradley y Schneider",
  "Dashboard OEE en tiempo real vía web",
  "Alertas automáticas por paros y fallas",
  "Reportes de turno y producción exportables",
  "Integración con bases de datos y ERPs existentes",
  "Soporte técnico y actualizaciones incluidas",
];

function AndonBoardMockup() {
  return (
    <div className="animate-float w-full max-w-sm mx-auto space-y-3">
      {/* Line 01 — Running */}
      <div className="bg-[#0f172a] rounded-xl p-4 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-white">L01 — Envasado</span>
          <span className="flex items-center gap-1.5 text-xs text-[#0ea86a] font-semibold">
            <span className="w-1.5 h-1.5 bg-[#0ea86a] rounded-full animate-pulse-dot" />
            RUNNING
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-bold text-white">92%</p>
            <p className="text-[10px] text-white/50 uppercase">OEE</p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">1,240</p>
            <p className="text-[10px] text-white/50 uppercase">Unidades</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#0ea86a]">0</p>
            <p className="text-[10px] text-white/50 uppercase">Paros</p>
          </div>
        </div>
      </div>

      {/* Line 02 — Fault */}
      <div className="bg-red-950/80 rounded-xl p-4 border border-red-500/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-white">L02 — Etiquetado</span>
          <span className="flex items-center gap-1.5 text-xs text-red-400 font-semibold">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse-dot" />
            FALLA
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-bold text-white">67%</p>
            <p className="text-[10px] text-white/50 uppercase">OEE</p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">890</p>
            <p className="text-[10px] text-white/50 uppercase">Unidades</p>
          </div>
          <div>
            <p className="text-lg font-bold text-red-400">3</p>
            <p className="text-[10px] text-white/50 uppercase">Paros</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OEEBox() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#0a0f1e] to-[#1847c2] overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — content */}
        <div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1847c2] bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6">
            Producto
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
            OEE Box
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
            Monitoreo OEE plug &amp; play.{" "}
            <span className="text-white font-semibold">Conecta al PLC en 10 minutos.</span>
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0ea86a] mt-0.5 shrink-0" />
                <span className="text-sm text-white/80">{f}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white/10 backdrop-blur rounded-xl px-5 py-4 inline-block mb-6 border border-white/10">
            <p className="text-sm text-white/60">
              Desde <span className="text-3xl font-bold text-white">$1,200 USD</span>{" "}
              <span className="text-white/50">/ instalación</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#0ea86a] hover:bg-[#0c9058] text-white rounded-xl text-base px-8 h-12 font-semibold min-h-[44px] shadow-lg shadow-[#0ea86a]/30">
              <Link href="https://demo.artemiodev.com" target="_blank" rel="noopener noreferrer">
                🚀 Ver Demo en Vivo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-xl text-base px-8 h-12 border-white/20 text-white hover:bg-white/10 hover:text-white min-h-[44px]">
              <Link href="/contacto">
                Solicitar cotización
              </Link>
            </Button>
          </div>
        </div>

        {/* Right — Andon Board mockup (below text on mobile) */}
        <div className="flex justify-center lg:justify-end order-last lg:order-none">
          <AndonBoardMockup />
        </div>
      </div>
    </section>
  );
}
