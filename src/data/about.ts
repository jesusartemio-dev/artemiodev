import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Cloud,
  Container,
  Cpu,
  Radio,
  BarChart3,
  GitBranch,
  Layers,
  Workflow,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: "web" | "industrial" | "infra";
}

export interface Experience {
  year: string;
  title: string;
  description: string;
}

export interface Course {
  name: string;
  institution: string;
}

export const skills: Skill[] = [
  { name: "Next.js", icon: Code2, category: "web" },
  { name: "React", icon: Code2, category: "web" },
  { name: "Node.js", icon: Code2, category: "web" },
  { name: "TypeScript", icon: Code2, category: "web" },
  { name: "PostgreSQL", icon: Database, category: "web" },
  { name: "MongoDB", icon: Database, category: "web" },
  { name: "Docker", icon: Container, category: "infra" },
  { name: "AWS", icon: Cloud, category: "infra" },
  { name: "PLC Programming", icon: Cpu, category: "industrial" },
  { name: "IoT / MQTT", icon: Radio, category: "industrial" },
  { name: "OPC UA", icon: Workflow, category: "industrial" },
  { name: "SCADA", icon: Layers, category: "industrial" },
  { name: "Data Analysis", icon: BarChart3, category: "industrial" },
  { name: "System Integration", icon: GitBranch, category: "industrial" },
  { name: "OT/IT Convergence", icon: Workflow, category: "industrial" },
];

export const experience: Experience[] = [
  {
    year: "2024",
    title: "Desarrollo Web Industrial Full-Stack",
    description:
      "Creación de aplicaciones web para monitoreo OEE, integración OT/IT y dashboards de producción con Next.js y Node.js.",
  },
  {
    year: "2020",
    title: "Integración OT/IT y Sistemas SCADA",
    description:
      "Conexión de PLCs y servidores Historian con bases de datos y APIs REST para digitalización de procesos industriales.",
  },
  {
    year: "2016",
    title: "Automatización y Control Industrial",
    description:
      "Programación de PLCs Allen-Bradley, Siemens y Schneider. Puesta en marcha de líneas de producción en minería, energía y manufactura.",
  },
  {
    year: "2013",
    title: "Ingeniería Electrónica",
    description:
      "Inicio de carrera profesional en ingeniería de control y automatización industrial.",
  },
];

export const courses: Course[] = [
  { name: "Full-Stack Web Development", institution: "Platzi" },
  { name: "Industrial IoT", institution: "Coursera" },
  { name: "SCADA Systems", institution: "Siemens" },
  { name: "Data Science for Industry", institution: "edX" },
];
