"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";

export function MobileMenu({ links = [] }: { links: { name: string, href: string, isButton?: boolean }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">תפריט</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-(--background)">
        <SheetTitle className="sr-only ">תפריט ניווט</SheetTitle>
        <SheetDescription className="sr-only">תפריט ניווט</SheetDescription>
        <nav className="flex flex-col gap-1 mt-5">
          {links.map((link) => (
            <Link
              key={link.name}
              onClick={() => setIsOpen(false)}
              href={link.href}
              className="block py-3 text-lg font-semibold hover:text-gray-600"
            >
              {link.isButton ? (
                <Button>{link.name}</Button>
              ) : (
                <span>{link.name}</span>
              )}
            </Link>
          ))}

        </nav>
      </SheetContent>
    </Sheet>
  );
}
