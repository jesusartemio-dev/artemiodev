import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <h1 className="text-7xl font-extrabold text-[#1847c2]/15 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#0a0f1e] mb-4">Página no encontrada</h2>
      <p className="text-[#5a6270] mb-8 max-w-md mx-auto">
        La página que buscas no existe o fue movida. Vuelve al inicio para
        continuar navegando.
      </p>
      <Button asChild className="bg-[#1847c2] hover:bg-[#1339a0] rounded-xl px-8 h-12 text-base">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
