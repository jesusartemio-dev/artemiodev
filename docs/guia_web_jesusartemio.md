
# Guía para crear mi página web jesusartemio.dev (Next.js 14)

## 🎯 Objetivo
Crear un sitio personal profesional en **Next.js 14** para promocionar mis servicios de **desarrollo web industrial (OT/IT)** y **full stack**.

---

## 🚀 1. Crear el proyecto base

Ejecutar en terminal (PowerShell o CMD):

```bash
npx create-next-app@latest jesusartemio-dev --typescript --eslint --app --src-dir --tailwind --use-npm
```

Cuando pregunte:
- ✅ Usar **Turbopack** → **Yes**
- ✅ Alias de importación `@/*` → **No** (dejar por defecto)

Luego entrar y ejecutar:
```bash
cd jesusartemio-dev
npm run dev
```
Abrir [http://localhost:3000](http://localhost:3000)

---

## ⚙️ 2. Instalar librerías adicionales

```bash
npm i next-seo react-hook-form zod class-variance-authority lucide-react
npx shadcn@latest init -y
npx shadcn@latest add button card input textarea badge navigation-menu accordion sheet sonner
```

---

## 🧱 3. Estructura del proyecto

```
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx
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

## 🎨 4. Diseño general

- Paleta: gris neutro + azul **#2563eb**
- Tipografía: **Inter**
- Layout centrado `max-w-6xl mx-auto px-6`
- Header con logo “Jesús A. Mamani” y nav.
- Footer con © año, LinkedIn y GitHub.

---

## 🧩 5. Contenido de páginas

### 🏠 Home (page.tsx)
- Hero con título:
  > "Desarrollo aplicaciones web industriales que conectan planta y negocio."
- Subtítulo: con descripción de experiencia y stack.
- CTAs: “Solicitar demo” y “Ver proyectos”.

### 💼 Servicios
Lista de servicios:
1. Aplicaciones Web Industriales (OT/IT)
2. OEE y Monitoreo en Tiempo Real
3. Integración de Datos Industriales
4. Sistemas Internos B2B
5. Consultoría & Arquitectura

### ⚙️ Portfolio
3 casos ejemplo con contexto, solución y resultado.

### 👨‍💻 Sobre mí
Bio profesional y lista de habilidades y cursos.

### 📞 Contacto
Formulario (nombre, empresa, correo, mensaje).  
Simular envío con `alert()` o ruta `/api/contact`.

---

## 📦 6. SEO y Metadatos

Configurar `next-seo` en `lib/seo.ts`:

```ts
export const defaultSEO = {
  title: "Aplicaciones Web Industriales | Full-Stack OT/IT – Jesús A. Mamani",
  description: "Desarrollo web industrial con Next.js, Node.js y PostgreSQL.",
};
```

Importar en `layout.tsx`.

---

## 🧠 7. Próximos pasos

1. Personalizar colores y fuentes.
2. Agregar favicon y logo.
3. Conectar formulario a Resend, Formspree o EmailJS.
4. Crear cuenta en [Vercel](https://vercel.com) y desplegar el sitio.
5. Configurar dominio personalizado `jesusartemio.dev`.

---

## ✅ 8. Comandos útiles

```bash
npm run dev        # Ejecutar localmente
npm run build      # Compilar para producción
npm run start      # Correr build
npm run lint       # Verificar código
```

---

## 🧾 9. Recomendaciones finales

- Usa componentes de **shadcn/ui** para un estilo limpio.
- Mantén textos cortos y profesionales.
- Usa imágenes reales de proyectos industriales.
- Incluye un botón de WhatsApp con mensaje prellenado.
- Verifica el sitio en modo móvil antes de publicar.

---

**Autor:** Jesús Artemio Mamani  
**Stack:** Next.js · React · Tailwind · Node.js · PostgreSQL · OT/IT Industrial
