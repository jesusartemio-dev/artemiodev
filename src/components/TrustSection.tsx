import { Cpu, Radio, Code2, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TechCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  items: string[];
}

const categories: TechCategory[] = [
  {
    title: "PLCs",
    icon: Cpu,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    items: ["Siemens", "Allen-Bradley", "Schneider"],
  },
  {
    title: "Protocolos",
    icon: Radio,
    color: "text-[#0ea86a]",
    bgColor: "bg-[#e6f9f0]",
    items: ["OPC UA", "MQTT", "Modbus"],
  },
  {
    title: "Web",
    icon: Code2,
    color: "text-[#1847c2]",
    bgColor: "bg-[#f0f4ff]",
    items: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    title: "Infra",
    icon: Server,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    items: ["PostgreSQL", "AWS", "Docker", "Grafana"],
  },
];

export default function TrustSection() {
  return (
    <section className="py-16">
      <p className="text-center text-sm font-semibold text-[#5a6270] uppercase tracking-widest mb-10">
        Tecnologías con las que trabajo
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.title} className="rounded-2xl border border-[#e2e6ee] bg-white p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-xl ${cat.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-4.5 h-4.5 ${cat.color}`} />
                </div>
                <span className="text-sm font-bold text-[#0a0f1e] uppercase tracking-wide">{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#f4f6f9] text-[#5a6270] border border-[#e2e6ee]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
