"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  links: { name: string, href: string, isButton?: boolean }[];
  scrolled?: boolean;
}

export function MobileMenu({ links = [], scrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "xl:hidden",
            scrolled ? "text-slate-900" : "text"
          )}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">תפריט</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-slate-200">
        <SheetTitle className="sr-only">תפריט ניווט</SheetTitle>
        <SheetDescription className="sr-only">תפריט ניווט</SheetDescription>

        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <span className="text-xl font-bold text-black">
            <span className="text-[var(--color-brand-gold)]">עדיאל</span> כהן
          </span>
        </div>

        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.name}
              onClick={() => setIsOpen(false)}
              href={link.href}
              className="block py-2 px-4 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-[var(--color-brand-gold)] transition-colors"
            >
              {link.isButton ? (
                <Button className="w-full bg-[var(--color-brand-gold)] text-slate-900 hover:bg-[var(--color-brand-gold-dark)] font-semibold">
                  {link.name}
                </Button>
              ) : (
                <span>{link.name}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-8 right-4 left-4">
          <p className="text-center text-sm text-slate-400">
            יועץ משכנתאות מוסמך
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
