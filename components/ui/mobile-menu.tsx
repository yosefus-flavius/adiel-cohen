"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">תפריט</span>
        </Button>
      </SheetTrigger>
      <SheetContent  side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle  className="sr-only ">תפריט ניווט</SheetTitle>
        <SheetDescription className="sr-only">תפריט ניווט</SheetDescription>
        <nav className="flex flex-col gap-4 mt-6">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
          >
            דף הבית
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#about"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
          >
            אודות
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/blog"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
          >
            בלוג
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#contact"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
          >
            צור קשר
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
