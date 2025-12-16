import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/ui/mobile-menu";
import Link from "next/link";
import { Button } from "../ui/button";

export const guestLinks = [
  { href: "/", name: "בית" },
  { href: "/blog", name: "מאמרים" },
  { href: '/news', name: 'חדשות' },
  { href: "/#about", name: "אודות" },
  { href: "/#steps", name: "השלבים" },
  { href: "/services", name: "שירותים" },
  { href: "/calc", name: "מחשבון" },
  { href: "/restore", name: "שחזור משכנתא" },
  { href: "/#contact", name: "צור קשר", isButton: true },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 /80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-(--primary-color)">
          עדיאל כהן
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {guestLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn("cursor-pointer",
                !link.isButton &&
                "text-lg font-semibold text-gray-600 hover:text-gray-500"
              )}
            >
              {link.isButton ? (
                <Button>{link.name}</Button>
              ) : (
                <span>{link.name}</span>
              )}
            </Link>
          ))}
        </div>

        <MobileMenu links={guestLinks} />
      </nav>
    </header>
  );
}
