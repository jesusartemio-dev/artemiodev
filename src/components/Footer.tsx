import Link from "next/link";
import { Linkedin, Github, Mail, Phone, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e6ee] mt-20 bg-[#f4f6f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <p className="text-lg font-bold text-[#0a0f1e]">Jesús A. Mamani</p>
          <p className="text-sm text-[#5a6270] mt-1">
            Ingeniero Electrónico | Full-Stack OT/IT
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-6">
            <Link
              href="mailto:jesusartemiodev@gmail.com"
              className="flex items-center gap-2 text-sm text-[#5a6270] hover:text-[#1847c2] transition-colors min-h-[44px]"
            >
              <Mail className="h-4 w-4" />
              jesusartemiodev@gmail.com
            </Link>
            <Link
              href="tel:+51950307588"
              className="flex items-center gap-2 text-sm text-[#5a6270] hover:text-[#1847c2] transition-colors min-h-[44px]"
            >
              <Phone className="h-4 w-4" />
              +51 950 307 588
            </Link>
            <Link
              href="https://calendly.com/jesusartemio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#1847c2] hover:text-[#1339a0] font-medium transition-colors min-h-[44px]"
            >
              <Calendar className="h-4 w-4" />
              Agendar llamada
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 mt-5">
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

        <div className="border-t border-[#e2e6ee] mt-8 pt-6">
          <p className="text-center text-xs text-[#5a6270]">
            &copy; {new Date().getFullYear()} Jesús A. Mamani. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
