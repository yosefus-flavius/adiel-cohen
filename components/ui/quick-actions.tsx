import { contactInfo } from "@/lib/data/contact";
import Link from "next/link";

const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/[^\d]/g, "")}`;

const actions = [
  {
    title: "התקשרו עכשיו",
    detail: contactInfo.phone.replace("+972", "0").replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3"),
    href: `tel:${contactInfo.phone}`,
    highlight: true,
  },
  { title: "וואטסאפ", detail: "כתבו לי ואחזור אליכם", href: whatsappUrl, external: true },
  { title: "בדיקת מחזור משכנתא", detail: "חינם וללא התחייבות", href: "/restore" },
];

export function QuickActions() {
  return (
    <section aria-label="דרכי יצירת קשר מהירות" className="bg-background pb-12 md:pb-16">
      <div className="container-main grid gap-4 md:grid-cols-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex min-h-20 flex-col justify-center gap-1 rounded-2xl border border-border bg-card px-6 py-4 transition-colors hover:border-[var(--color-brand-gold)]"
          >
            <span className="text-lg font-bold text-foreground">{action.title}</span>
            <span
              dir={action.highlight ? "ltr" : undefined}
              className={
                action.highlight
                  ? "text-start font-bold text-[var(--color-brand-gold-text)]"
                  : "text-muted-foreground"
              }
            >
              {action.detail}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
