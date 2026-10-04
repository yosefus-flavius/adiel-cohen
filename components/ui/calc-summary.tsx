"use client";

import { formatILS, monthlyPayment } from "@/lib/calc-store";
import { useCalc } from "./calc-card";

/** Shows the visitor's own calculator numbers above the contact form (only after they used it). */
export function CalcSummary() {
  const { amount, years, touched } = useCalc();
  if (!touched) return null;

  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card px-6 py-5">
      <p className="text-sm text-muted-foreground">מה שחישבתם בהתחלה</p>
      <p className="text-xl font-bold text-foreground">
        {formatILS(amount)} · {years} שנים
      </p>
      <p className="text-3xl font-extrabold text-[var(--color-brand-gold-text)]">
        כ-{formatILS(monthlyPayment(amount, years))} לחודש
      </p>
    </div>
  );
}
