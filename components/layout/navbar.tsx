import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 /80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[var(--primary-color)]">
          עדיאל כהן
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="hover:text-gray-600">
            ראשי
          </Link>
          <Link href="/#about" className="hover:text-gray-600">
            אודות
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            בלוג
          </Link>
          <Link href="/#contact">
            <Button>צור קשר</Button>
          </Link>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
