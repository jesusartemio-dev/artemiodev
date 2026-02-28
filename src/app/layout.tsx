import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Jesús A. Mamani | Ingeniero Electrónico y Full-Stack OT/IT",
  description: "Especialista en automatización industrial, programación de PLCs, integración SCADA y desarrollo web con Next.js y Node.js.",
  openGraph: {
    title: "Jesús A. Mamani | Ingeniero Electrónico y Full-Stack OT/IT",
    description: "Especialista en automatización industrial, programación de PLCs, integración SCADA y desarrollo web con Next.js y Node.js.",
    url: "https://jesusartemio.dev",
    siteName: "Jesús A. Mamani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesús A. Mamani | Ingeniero Electrónico y Full-Stack OT/IT",
    description: "Especialista en automatización industrial, programación de PLCs, integración SCADA y desarrollo web con Next.js y Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-blue-600 focus:rounded-md focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
