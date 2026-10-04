import { CalcCard } from "@/components/ui/calc-card";
import { Check } from "lucide-react";

const points = ["ליווי אישי", "חיסכון משמעותי", "בדיקת מחזור משכנתא"];

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container-main grid items-start gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-6 lg:pt-3">
          <p className="self-start rounded-full border border-border px-4 py-1.5 text-sm font-bold text-[var(--color-brand-gold-text)]">
            עדיאל כהן
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
            יועץ משכנתאות מוסמך.
            <br />
            <span className="text-[var(--color-brand-gold-text)]">בדקו כמה תשלמו בחודש.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            הזיזו את הסליידרים וראו הערכת החזר חודשי. אחר כך אני בודק עבורכם מול הבנקים, ומלווה
            אתכם עד המשכנתא המושלמת, עם ליווי אישי, מקצועי ואנושי.
          </p>
          <ul className="flex flex-col gap-3 text-lg text-foreground">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-gold)] text-[#1B1405]">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <CalcCard />
      </div>
    </section>
  );
}
