import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/** Primary gold call-to-action link used at the bottom of inner pages. */
export function CtaLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--color-brand-gold)] px-8 py-4 font-bold text-[#1B1405] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--color-brand-gold-dark)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {children}
      <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
    </Link>
  );
}
