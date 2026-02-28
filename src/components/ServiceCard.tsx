import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="rounded-2xl border-[#e2e6ee] hover:shadow-lg hover:border-[#1847c2]/30 transition-all duration-300 flex flex-col group">
      <CardHeader>
        <div className="w-14 h-14 rounded-2xl bg-[#f0f4ff] flex items-center justify-center mb-3 group-hover:bg-[#1847c2] transition-colors">
          <Icon className="w-7 h-7 text-[#1847c2] group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-lg text-[#0a0f1e]">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-[#5a6270] text-sm mb-4 leading-relaxed">{service.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#f4f6f9] text-[#5a6270] border border-[#e2e6ee]"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild className="w-full rounded-xl border-[#e2e6ee] hover:bg-[#1847c2] hover:text-white hover:border-[#1847c2] transition-colors">
          <Link href={service.ctaHref}>{service.ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
