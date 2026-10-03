"use client";

import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/ui/mobile-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { guestLinks } from "@/lib/data/nav-links";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "navbar-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200/50" 
          : "bg-transparent"
      )}
    >
      <nav className="container-main h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "text-xl font-bold transition-colors duration-300",
            scrolled 
              ? "text-slate-900" 
              : "text"
          )}
        >
          <span className="text-[var(--color-brand-gold)]">עדיאל</span> כהן
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          {guestLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors duration-200",
                link.isButton
                  ? ""
                  : scrolled
                    ? "text-slate-600 hover:text-[var(--color-brand-gold)] text-sm font-medium"
                    : "text-white/80 hover:text-white text-sm font-medium"
              )}
            >
              {link.isButton ? (
                <Button 
                  className={cn(
                    "bg-[var(--color-brand-gold)] text-slate-900 hover:bg-[var(--color-brand-gold-dark)] font-semibold px-6",
                    !scrolled && "shadow-lg shadow-[var(--color-brand-gold)]/30"
                  )}
                >
                  {link.name}
                </Button>
              ) : (
                <span className="relative group">
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[var(--color-brand-gold)] transition-all duration-300 group-hover:w-full" />
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden">
          <MobileMenu links={guestLinks} scrolled={scrolled} />
        </div>
      </nav>
    </header>
  );
}
