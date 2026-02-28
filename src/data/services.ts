import type { LucideIcon } from "lucide-react";
import { Factory, BarChart3, Database, Cog, Users } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    title: "Aplicaciones Web Industriales (OT/IT)",
    description:
      "Desarrollo de aplicaciones que integran sistemas operativos y de TI para optimizar procesos industriales.",
    icon: Factory,
    tags: ["Next.js", "Node.js", "OPC UA", "MQTT"],
    ctaText: "Solicitar cotización",
    ctaHref: "/contacto",
  },
  {
    title: "OEE y Monitoreo en Tiempo Real",
    description:
      "Sistemas de monitoreo de eficiencia general de equipos con dashboards en tiempo real.",
    icon: BarChart3,
    tags: ["React", "PostgreSQL", "WebSocket", "Grafana"],
    ctaText: "Ver demo",
    ctaHref: "/contacto",
    featured: true,
  },
  {
    title: "Integración de Datos Industriales",
    description:
      "Conexión de sensores, PLCs y bases de datos para análisis de datos industriales.",
    icon: Database,
    tags: ["OPC UA", "Modbus", "MQTT", "PostgreSQL"],
    ctaText: "Consultar",
    ctaHref: "/contacto",
  },
  {
    title: "Sistemas Internos B2B",
    description:
      "Plataformas web para gestión interna de empresas industriales.",
    icon: Cog,
    tags: ["Next.js", "TypeScript", "REST API", "Auth"],
    ctaText: "Solicitar cotización",
    ctaHref: "/contacto",
  },
  {
    title: "Consultoría & Arquitectura",
    description:
      "Asesoría en diseño de sistemas y selección de tecnologías para proyectos industriales.",
    icon: Users,
    tags: ["Arquitectura", "AWS", "Docker", "CI/CD"],
    ctaText: "Agendar llamada",
    ctaHref: "https://calendly.com/jesusartemio/30min",
  },
];
