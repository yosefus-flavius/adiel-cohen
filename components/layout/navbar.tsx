import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";
const links = [
  { href: "/", name: "ראשי" },
  { href: "/#about", name: "אודות" },
  { href: "/blog", name: "בלוג" },
  { href: "/#contact", name: "צור קשר", isButton: true },
  { href: "/#steps", name: "השלבים" },
]
export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 /80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[var(--primary-color)]">
          עדיאל כהן
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-gray-600 hover:text-gray-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <MobileMenu links={links} />
      </nav>
    </header>
  );
}
