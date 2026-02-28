"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e6ee] bg-white/85 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-bold text-[#0a0f1e]">
            Jesús A. Mamani
          </Link>
          <p className="text-xs text-[#5a6270] -mt-0.5 hidden sm:block">
            Ingeniero Electrónico | Especialista en Automatización Industrial
          </p>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-lg text-sm",
                    isActive(link.href) && "text-[#1847c2] font-semibold bg-[#f0f4ff]"
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile hamburger button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden min-w-[44px] min-h-[44px]"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú de navegación"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile fullscreen overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col md:hidden">
            <div className="flex justify-between items-center px-4 py-4 border-b border-[#e2e6ee]">
              <div>
                <p className="text-xl font-bold text-[#0a0f1e]">Jesús A. Mamani</p>
                <p className="text-xs text-[#5a6270] -mt-0.5">Ingeniero Electrónico</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="min-w-[44px] min-h-[44px]"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú de navegación"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1 px-4 pt-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "text-xl py-3 px-4 rounded-xl transition-colors min-h-[44px] flex items-center",
                    isActive(link.href)
                      ? "text-[#1847c2] font-semibold bg-[#f0f4ff]"
                      : "text-[#0a0f1e] hover:bg-[#f4f6f9]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
