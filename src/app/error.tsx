"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <h1 className="text-4xl font-extrabold text-[#0a0f1e] mb-4">Algo salió mal</h1>
      <p className="text-[#5a6270] mb-8 max-w-md mx-auto">
        Ocurrió un error inesperado. Intenta recargar la página.
      </p>
      <Button onClick={reset} className="bg-[#1847c2] hover:bg-[#1339a0] rounded-xl px-8 h-12 text-base">
        Intentar de nuevo
      </Button>
    </div>
  );
}
