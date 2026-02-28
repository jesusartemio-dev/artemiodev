"use client";

import { useState, useEffect } from "react";
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
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#e2e6ee]/60 shadow-sm"
          : "bg-white/0 backdrop-blur-none border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-[#1847c2] animate-pulse-dot" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-[#1847c2]" />
          </span>
          <div>
            <span className="text-[22px] font-bold text-[#0a0f1e] tracking-tight">
              Jesús A. Mamani
            </span>
            <p className="text-[11px] text-[#5a6270] -mt-1 hidden sm:block leading-none">
              Ingeniero Electrónico · Automatización Industrial
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavigationMenu>
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
          <Link
            href="/contacto"
            className={cn(
              "ml-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 min-h-[36px]",
              isActive("/contacto")
                ? "bg-[#1339a0] text-white shadow-lg shadow-[#1847c2]/30"
                : "bg-[#1847c2] text-white hover:bg-[#1339a0] shadow-md shadow-[#1847c2]/20 hover:shadow-lg hover:shadow-[#1847c2]/30"
            )}
          >
            Contacto
          </Link>
        </div>

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
            <div className="flex justify-between items-center px-4 py-3.5 border-b border-[#e2e6ee]">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1847c2]" />
                <span className="text-[22px] font-bold text-[#0a0f1e] tracking-tight">
                  Jesús A. Mamani
                </span>
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
              {[...navLinks, { href: "/contacto", label: "Contacto" }].map((link) => (
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
