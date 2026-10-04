"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  links: { name: string, href: string, isButton?: boolean }[];
}

export function MobileMenu({ links = [] }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted xl:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">תפריט</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] border-l border-border bg-background sm:w-[400px]">
        <SheetTitle className="sr-only">תפריט ניווט</SheetTitle>
        <SheetDescription className="sr-only">תפריט ניווט</SheetDescription>

        <div className="mb-6 border-b border-border pb-4">
          <span className="text-xl font-extrabold text-foreground">
            <span className="text-[var(--color-brand-gold-text)]">עדיאל</span> כהן
          </span>
        </div>

        <nav aria-label="תפריט נייד" className="flex flex-col gap-1">
          {links.map((link) =>
            link.isButton ? (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-brand-gold)] px-4 font-bold text-[#1B1405] transition-colors hover:bg-[var(--color-brand-gold-dark)]"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className="flex min-h-11 items-center rounded-lg px-4 font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <p className="absolute inset-x-4 bottom-8 text-center text-sm text-muted-foreground">
          יועץ משכנתאות
        </p>
      </SheetContent>
    </Sheet>
  );
}
