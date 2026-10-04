import { contactInfo } from "@/lib/data/contact";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CalcSummary } from "./calc-summary";
import Lead from "./lead";

const contactMethods = [
  {
    icon: Phone,
    title: "טלפון",
    value: contactInfo.phone.replace("+972", "0").replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3"),
    href: `tel:${contactInfo.phone}`,
    description: "זמין בימי עבודה",
    ltr: true,
  },
  {
    icon: Mail,
    title: "אימייל",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: "מענה תוך 24 שעות",
    ltr: true,
  },
  {
    icon: MapPin,
    title: "כתובת",
    value: contactInfo.address,
    href: "https://waze.com/ul?ll=31.89236134%2C34.81322765&navigate=yes",
    description: "לחצו לניווט",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-main grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-bold text-[var(--color-brand-gold-text)]">צור קשר</p>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            נבדוק את המספרים שלכם מול הבנקים
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            השאירו שם וטלפון ואחזור אליכם בהקדם, בלי התחייבות. אפשר גם להתקשר או לכתוב בוואטסאפ.
          </p>

          <CalcSummary />

          <ul className="flex flex-col gap-3">
            {contactMethods.map((method) => (
              <li key={method.title}>
                <a
                  href={method.href}
                  {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-16 items-center gap-4 rounded-2xl border border-border bg-card px-5 py-3 transition-colors hover:border-[var(--color-brand-gold)]"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1E7CF] text-[var(--color-brand-gold-text)] dark:bg-[#273449]">
                    <method.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <strong className="text-base text-foreground">{method.title}</strong>
                    <span dir={method.ltr ? "ltr" : undefined} className="text-start text-base text-muted-foreground">
                      {method.value}
                    </span>
                    <span className="text-sm text-muted-foreground">{method.description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden="true" />
            זמין בימי עבודה
          </p>
        </div>

        <Lead />
      </div>
    </section>
  );
}
