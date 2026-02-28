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
    year: "2006",
    title: "Instrumentista — Minería (Perú)",
    description:
      "Inicio de carrera profesional en instrumentación y control en el sector minero.",
  },
  {
    year: "2007",
    title: "Programador PLC — Control Total SAC (Perú)",
    description:
      "Programación de PLCs y puesta en marcha de sistemas de control industrial.",
  },
  {
    year: "2012",
    title: "Control Engineer — Deneen Engineering (USA/Canadá)",
    description:
      "Ingeniería de control y automatización para proyectos internacionales en minería y energía.",
  },
  {
    year: "2015",
    title: "Gerente de Proyectos — GYS Control Industrial (Perú)",
    description:
      "Gestión de proyectos de automatización para clientes como Yanacocha, Antamina, Barrick y Statkraft.",
  },
  {
    year: "2024",
    title: "Desarrollador Full-Stack Industrial (Independiente)",
    description:
      "Desarrollo de software industrial: monitoreo OEE, integración OT/IT y dashboards de producción con Next.js y Node.js.",
  },
];

export const courses: Course[] = [
  { name: "Full-Stack Web Development", institution: "Platzi" },
  { name: "Industrial IoT", institution: "Coursera" },
  { name: "SCADA Systems", institution: "Siemens" },
  { name: "Data Science for Industry", institution: "edX" },
];
