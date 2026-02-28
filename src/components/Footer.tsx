import Link from "next/link";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Aplicaciones Web OT/IT", href: "/servicios" },
  { label: "Monitoreo OEE", href: "/servicios" },
  { label: "Integración de Datos", href: "/servicios" },
  { label: "Sistemas B2B", href: "/servicios" },
  { label: "Consultoría", href: "/servicios" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e6ee] mt-20 bg-[#f4f6f9]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-[#0a0f1e]">Jesús A. Mamani</p>
            <p className="text-sm text-[#5a6270] mt-1">
              Ingeniero Electrónico | Full-Stack OT/IT
            </p>
            <p className="text-sm text-[#5a6270] mt-3 leading-relaxed">
              Desarrollo aplicaciones web que conectan la planta industrial con
              las decisiones de negocio.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://linkedin.com/in/jesusartemio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Jesús A. Mamani"
                className="w-9 h-9 rounded-xl bg-white border border-[#e2e6ee] flex items-center justify-center text-[#5a6270] hover:text-[#1847c2] hover:border-[#1847c2]/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/jesusartemio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Jesús A. Mamani"
                className="w-9 h-9 rounded-xl bg-white border border-[#e2e6ee] flex items-center justify-center text-[#5a6270] hover:text-[#0a0f1e] hover:border-[#0a0f1e]/30 transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-[#0a0f1e] mb-3">Servicios</p>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5a6270] hover:text-[#1847c2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-[#0a0f1e] mb-3">Contacto</p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:jesusartemiodev@gmail.com"
                  className="flex items-center gap-2 text-sm text-[#5a6270] hover:text-[#1847c2] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  jesusartemiodev@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+51950307588"
                  className="flex items-center gap-2 text-sm text-[#5a6270] hover:text-[#1847c2] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +51 950 307 588
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/jesusartemio/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1847c2] hover:text-[#1339a0] font-medium transition-colors"
                >
                  Agendar llamada gratuita
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e2e6ee] mt-8 pt-6">
          <p className="text-center text-xs text-[#5a6270]">
            &copy; {new Date().getFullYear()} Jesús A. Mamani. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
