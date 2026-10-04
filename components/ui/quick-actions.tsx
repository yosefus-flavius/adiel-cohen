import { contactInfo } from "@/lib/data/contact";
import { ChevronLeft, MessageCircle, Phone, RefreshCw } from "lucide-react";
import Link from "next/link";

const whatsappUrl = `https://wa.me/${contactInfo.phone.replace(/[^\d]/g, "")}`;

const actions = [
  {
    title: "התקשרו עכשיו",
    detail: contactInfo.phone.replace("+972", "0").replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3"),
    href: `tel:${contactInfo.phone}`,
    icon: Phone,
    highlight: true,
  },
  { title: "וואטסאפ", detail: "כתבו לי ואחזור אליכם", href: whatsappUrl, icon: MessageCircle, external: true },
  { title: "בדיקת מחזור משכנתא", detail: "חינם וללא התחייבות", href: "/restore", icon: RefreshCw },
];

export function QuickActions() {
  return (
    <section aria-label="דרכי יצירת קשר מהירות" className="no-mist bg-background pb-12 md:pb-16">
      <div className="container-main grid gap-4 md:grid-cols-3">
        {actions.map(({ icon: Icon, ...action }) => (
          <Link
            key={action.title}
            href={action.href}
            {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`group flex min-h-20 items-center gap-4 rounded-2xl border px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
              action.highlight
                ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)] text-[#1B1405] hover:bg-[var(--color-brand-gold-dark)]"
                : "border-border bg-card text-foreground hover:border-[var(--color-brand-gold)]"
            }`}
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                action.highlight ? "bg-[#1B1405]/10" : "bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold-text)]"
              }`}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-lg font-bold">{action.title}</span>
              <span
                dir={action.highlight ? "ltr" : undefined}
                className={`${action.highlight ? "text-start font-bold" : "text-muted-foreground"}`}
              >
                {action.detail}
              </span>
            </span>
            <ChevronLeft
              className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
