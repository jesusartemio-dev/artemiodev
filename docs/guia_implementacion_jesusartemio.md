# Guía de Implementación: Página Web Personal jesusartemio.dev

Basado en la guía original, esta es una guía paso a paso para implementar la página web desde el estado actual del proyecto Next.js.

## Estado Actual
- Proyecto Next.js 15 creado con TypeScript, app router, src-dir, Tailwind CSS y Turbopack.
- Contenido por defecto de Next.js en page.tsx y layout.tsx.
- Librerías base instaladas, pero faltan adicionales.

---

## 🚀 1. Instalar Librerías Adicionales

Ejecuta en terminal:

```bash
npm i next-seo react-hook-form zod class-variance-authority lucide-react
npx shadcn@latest init -y
npx shadcn@latest add button card input textarea badge navigation-menu accordion sheet sonner
```

---

## 🧱 2. Crear Estructura de Carpetas

Crea las siguientes carpetas y archivos en `src/`:

```
src/
├─ app/
│   ├─ servicios/page.tsx
│   ├─ portfolio/page.tsx
│   ├─ sobre-mi/page.tsx
│   ├─ contacto/page.tsx
│   └─ api/contact/route.ts
├─ components/
│   ├─ Hero.tsx
│   ├─ ServiceCard.tsx
│   ├─ CaseCard.tsx
│   ├─ Packages.tsx
│   ├─ FAQ.tsx
│   └─ ContactForm.tsx
└─ lib/
    ├─ seo.ts
    └─ utils.ts
```

---

## 🎨 3. Actualizar Layout y Diseño General

### Actualizar `src/app/layout.tsx`

Cambia las fuentes a Inter y agrega metadatos personalizados:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aplicaciones Web Industriales | Full-Stack OT/IT – Jesús A. Mamani",
  description: "Desarrollo web industrial con Next.js, Node.js y PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {/* Header aquí */}
        {children}
        {/* Footer aquí */}
      </body>
    </html>
  );
}
```

### Agregar Header y Footer

Crea componentes `Header.tsx` y `Footer.tsx` en `src/components/`.

Header con logo "Jesús A. Mamani" y navegación.

Footer con © año, LinkedIn y GitHub.

---

## 🏠 4. Implementar Página Home (page.tsx)

Reemplaza el contenido por defecto con:

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Hero />
      {/* Otras secciones */}
    </div>
  );
}
```

### Componente Hero

En `src/components/Hero.tsx`:

```tsx
export default function Hero() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center">
        Desarrollo aplicaciones web industriales que conectan planta y negocio.
      </h1>
      <p className="text-lg text-center mt-4">
        Subtítulo con descripción de experiencia y stack.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Solicitar demo</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">Ver proyectos</button>
      </div>
    </section>
  );
}
```

---

## 💼 5. Crear Página Servicios

En `src/app/servicios/page.tsx`:

```tsx
import ServiceCard from "@/components/ServiceCard";

const services = [
  "Aplicaciones Web Industriales (OT/IT)",
  "OEE y Monitoreo en Tiempo Real",
  "Integración de Datos Industriales",
  "Sistemas Internos B2B",
  "Consultoría & Arquitectura"
];

export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service} />
        ))}
      </div>
    </div>
  );
}
```

Crea `ServiceCard.tsx` similarmente.

---

## ⚙️ 6. Crear Página Portfolio

En `src/app/portfolio/page.tsx`:

Incluye 3 casos de ejemplo con contexto, solución y resultado.

Usa `CaseCard.tsx`.

---

## 👨‍💻 7. Crear Página Sobre Mí

En `src/app/sobre-mi/page.tsx`:

Bio profesional y lista de habilidades y cursos.

---

## 📞 8. Crear Página Contacto

En `src/app/contacto/page.tsx`:

```tsx
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>
      <ContactForm />
    </div>
  );
}
```

### Formulario de Contacto

En `src/components/ContactForm.tsx`:

Usa react-hook-form y zod para validación.

Campos: nombre, empresa, correo, mensaje.

Envía a `/api/contact`.

---

## 📡 9. Implementar API Route

En `src/app/api/contact/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, company, email, message } = await request.json();
  // Simular envío o integrar con servicio externo
  console.log({ name, company, email, message });
  return NextResponse.json({ success: true });
}
```

---

## 📦 10. Configurar SEO

En `src/lib/seo.ts`:

```ts
export const defaultSEO = {
  title: "Aplicaciones Web Industriales | Full-Stack OT/IT – Jesús A. Mamani",
  description: "Desarrollo web industrial con Next.js, Node.js y PostgreSQL.",
};
```

Importa en `layout.tsx` con `NextSeo`.

---

## 🎨 11. Aplicar Sistema de Diseño

- Paleta: gris neutro + azul #2563eb
- Layout centrado max-w-6xl mx-auto px-6
- Usa shadcn/ui para componentes consistentes.

---

## 🖼️ 12. Agregar Favicon y Logo

Reemplaza `src/app/favicon.ico` y agrega logo en header.

---

## 📧 13. Conectar Formulario a Servicio Externo

Integra con Resend, Formspree o EmailJS en `/api/contact`.

---

## 💬 14. Agregar Botón de WhatsApp

Agrega un botón flotante con enlace a WhatsApp con mensaje prellenado.

---

## 📱 15. Probar Responsividad Móvil

Usa herramientas de navegador para verificar en móvil.

---

## 🚀 16. Desplegar en Vercel

```bash
npm run build
npm run start
```

Sube a Vercel y configura dominio jesusartemio.dev.

---

## ✅ Comandos Útiles

```bash
npm run dev        # Ejecutar localmente
npm run build      # Compilar para producción
npm run start      # Correr build
npm run lint       # Verificar código
```

---

**Recomendaciones:** Mantén textos cortos, usa imágenes reales, verifica móvil antes de publicar.