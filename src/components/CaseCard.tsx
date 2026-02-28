import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { CaseStudy } from "@/data/portfolio";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

const tagColors = [
  "bg-[#f0f4ff] text-[#1847c2] border-[#1847c2]/15",
  "bg-[#e6f9f0] text-[#0ea86a] border-[#0ea86a]/15",
  "bg-purple-50 text-purple-600 border-purple-200",
  "bg-amber-50 text-amber-600 border-amber-200",
];

export default function CaseCard({ caseStudy }: CaseCardProps) {
  const Icon = caseStudy.icon;

  return (
    <Card className="rounded-2xl border-[#e2e6ee] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
      <div className={`${caseStudy.gradient} aspect-video flex items-center justify-center relative`}>
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        {/* Result badge — prominent chip */}
        <Badge className="absolute bottom-3 left-3 right-3 bg-white text-[#0a0f1e] font-bold shadow-lg border-0 rounded-xl px-4 py-2 text-sm justify-center">
          {caseStudy.result}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base sm:text-lg text-[#0a0f1e]">{caseStudy.title}</CardTitle>
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
