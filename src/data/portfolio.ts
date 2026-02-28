import type { LucideIcon } from "lucide-react";
import { BarChart3, Cpu, PackageCheck } from "lucide-react";

export interface CaseStudy {
  title: string;
  context: string;
  solution: string;
  result: string;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Sistema de Monitoreo OEE Industrial",
    context:
      "Monitoreo de eficiencia de líneas de producción conectadas a PLCs Siemens.",
    solution:
      "Aplicación web desarrollada con Next.js y Node.js que se comunica con OPC UA para leer datos de producción y generar reportes automáticos.",
    result: "Mejora del 20% en disponibilidad",
    icon: BarChart3,
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-400",
    tags: ["Next.js", "OPC UA", "Siemens", "Node.js"],
  },
  {
    title: "Integración PLC ControlLogix con Historian",
    context:
      "Migración de sistema SLC500 a ControlLogix con requerimiento de monitoreo remoto.",
    solution:
      "Desarrollo de API REST que conecta PLC Allen-Bradley con servidor Historian y dashboard web para visualización de datos operativos.",
    result: "Monitoreo 24/7 y reducción de downtime",
    icon: Cpu,
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-400",
    tags: ["Allen-Bradley", "REST API", "Historian", "React"],
  },
  {
    title: "Automatización de Línea con Trazabilidad Web",
    context:
      "Línea de despacho industrial requería trazabilidad completa vía interfaz web.",
    solution:
      "Sistema SCADA conectado a PostgreSQL mediante MQTT, con dashboard Next.js para seguimiento de producción y calidad.",
    result: "Trazabilidad 100% y +15% eficiencia",
    icon: PackageCheck,
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-400",
    tags: ["MQTT", "PostgreSQL", "SCADA", "Next.js"],
  },
];
