import { MobileMenu } from "@/components/ui/mobile-menu";
import { ThemeToggle } from "@/components/theme/theme-controls";
import { guestLinks } from "@/lib/data/nav-links";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="navbar-enter fixed inset-x-0 top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <nav aria-label="ראשי" className="container-main flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-xl font-extrabold text-foreground">
          <span className="text-[var(--color-brand-gold-text)]">עדיאל</span> כהן
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:flex">
          {guestLinks.map((link) =>
            link.isButton ? (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-xl bg-[var(--color-brand-gold)] px-6 text-sm font-bold text-[#1B1405] transition-colors hover:bg-[var(--color-brand-gold-dark)]"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            )
          )}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle stays visible next to the menu button */}
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <MobileMenu links={guestLinks} />
        </div>
      </nav>
    </header>
  );
}
