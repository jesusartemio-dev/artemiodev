interface TechItem {
  name: string;
  emoji: string;
}

interface TechCategory {
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  items: TechItem[];
}

const categories: TechCategory[] = [
  {
    title: "PLCs",
    emoji: "🔧",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    items: [
      { name: "Siemens", emoji: "⚡" },
      { name: "Allen-Bradley", emoji: "🔧" },
      { name: "Schneider", emoji: "🏭" },
    ],
  },
  {
    title: "Protocolos",
    emoji: "📡",
    color: "text-[#0ea86a]",
    bgColor: "bg-[#e6f9f0]",
    borderColor: "border-[#0ea86a]/20",
    items: [
      { name: "OPC UA", emoji: "🔗" },
      { name: "MQTT", emoji: "📡" },
      { name: "Modbus", emoji: "🔌" },
    ],
  },
  {
    title: "Web",
    emoji: "💻",
    color: "text-[#1847c2]",
    bgColor: "bg-[#f0f4ff]",
    borderColor: "border-[#1847c2]/20",
    items: [
      { name: "Next.js", emoji: "▲" },
      { name: "React", emoji: "⚛️" },
      { name: "Node.js", emoji: "🟢" },
      { name: "TypeScript", emoji: "🔷" },
    ],
  },
  {
    title: "Infra",
    emoji: "☁️",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    items: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "AWS", emoji: "☁️" },
      { name: "Docker", emoji: "🐳" },
      { name: "Grafana", emoji: "📊" },
    ],
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 sm:py-16">
      <p className="text-center text-sm font-semibold text-[#5a6270] uppercase tracking-widest mb-8 sm:mb-10">
        Tecnologías con las que trabajo
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className={`rounded-2xl border ${cat.borderColor} bg-white p-4 sm:p-5 hover:shadow-md transition-shadow`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg" role="img" aria-hidden="true">{cat.emoji}</span>
              <span className={`text-sm font-bold ${cat.color} uppercase tracking-wide`}>{cat.title}</span>
            </div>
            <div className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl ${cat.bgColor} text-xs sm:text-sm font-medium text-[#0a0f1e]`}
                >
                  <span className="text-sm shrink-0" role="img" aria-hidden="true">{item.emoji}</span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
