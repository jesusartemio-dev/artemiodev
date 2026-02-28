import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { CaseStudy } from "@/data/portfolio";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

const gradientMap: Record<string, string> = {
  "from-blue-500 to-cyan-400": "bg-gradient-to-br from-[#1847c2] to-cyan-400",
  "from-indigo-500 to-purple-400": "bg-gradient-to-br from-indigo-500 to-purple-500",
  "from-emerald-500 to-teal-400": "bg-gradient-to-br from-[#0ea86a] to-teal-400",
};

const tagColors = [
  "bg-[#f0f4ff] text-[#1847c2] border-[#1847c2]/15",
  "bg-[#e6f9f0] text-[#0ea86a] border-[#0ea86a]/15",
  "bg-purple-50 text-purple-600 border-purple-200",
  "bg-amber-50 text-amber-600 border-amber-200",
];

export default function CaseCard({ caseStudy }: CaseCardProps) {
  const Icon = caseStudy.icon;
  const gradientKey = `${caseStudy.gradientFrom} ${caseStudy.gradientTo}`;
  const gradientClass = gradientMap[gradientKey] ?? "bg-gradient-to-br from-[#1847c2] to-cyan-400";

  return (
    <Card className="rounded-2xl border-[#e2e6ee] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      <div className={`${gradientClass} aspect-video flex items-center justify-center relative`}>
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        {/* Result badge floating */}
        <Badge className="absolute top-3 right-3 bg-white text-[#0a0f1e] font-bold shadow-lg border-0 rounded-full px-3 py-1">
          {caseStudy.result}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-[#0a0f1e]">{caseStudy.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {caseStudy.tags.map((tag, i) => (
            <span
              key={tag}
              className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border ${tagColors[i % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-3 flex-1">
        <div>
          <h4 className="font-semibold text-xs text-[#5a6270] uppercase tracking-widest">Contexto</h4>
          <p className="text-sm text-[#0a0f1e]/80 mt-1 leading-relaxed">{caseStudy.context}</p>
        </div>
        <div>
          <h4 className="font-semibold text-xs text-[#5a6270] uppercase tracking-widest">Solución</h4>
          <p className="text-sm text-[#0a0f1e]/80 mt-1 leading-relaxed">{caseStudy.solution}</p>
        </div>
        <Button variant="outline" size="sm" asChild className="w-full mt-2 rounded-xl border-[#e2e6ee] hover:bg-[#1847c2] hover:text-white hover:border-[#1847c2] transition-colors">
          <Link href="/contacto">Solicitar caso similar</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
