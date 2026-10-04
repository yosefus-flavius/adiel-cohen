"use client";

import { useSyncExternalStore } from "react";
import {
  SAMPLE_RATE,
  formatILS,
  getCalc,
  getServerCalc,
  monthlyPayment,
  setCalc,
  subscribeCalc,
} from "@/lib/calc-store";

export function useCalc() {
  return useSyncExternalStore(subscribeCalc, getCalc, getServerCalc);
}

export function CalcCard() {
  const { amount, years } = useCalc();
  const payment = monthlyPayment(amount, years);

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <label htmlFor="calc-amount" className="flex justify-between gap-4 font-semibold text-foreground">
          <span>סכום המשכנתא</span>
          <output htmlFor="calc-amount" className="font-extrabold text-[var(--color-brand-gold-text)]">
            {formatILS(amount)}
          </output>
        </label>
        <input
          id="calc-amount"
          type="range"
          min={300000}
          max={3000000}
          step={50000}
          value={amount}
          onChange={(e) => setCalc({ amount: Number(e.target.value) })}
          className="h-7 w-full accent-[var(--color-brand-gold)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="calc-years" className="flex justify-between gap-4 font-semibold text-foreground">
          <span>תקופה בשנים</span>
          <output htmlFor="calc-years" className="font-extrabold text-[var(--color-brand-gold-text)]">
            {years}
          </output>
        </label>
        <input
          id="calc-years"
          type="range"
          min={5}
          max={30}
          step={1}
          value={years}
          onChange={(e) => setCalc({ years: Number(e.target.value) })}
          className="h-7 w-full accent-[var(--color-brand-gold)]"
        />
      </div>

      <div className="rounded-2xl border border-border bg-background p-5" aria-live="polite">
        <p className="text-sm text-muted-foreground">
          הערכת החזר חודשי (ריבית לדוגמה {(SAMPLE_RATE * 100).toFixed(1)}%)
        </p>
        <p className="mt-1 text-4xl sm:text-5xl font-extrabold text-[var(--color-brand-gold-text)]">
          {formatILS(payment)}
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[var(--color-brand-gold)] px-6 text-lg font-extrabold text-[#1B1405] transition-colors hover:bg-[var(--color-brand-gold-dark)]"
      >
        רוצה בדיקה אמיתית מול הבנקים
      </a>
      <p className="text-sm text-muted-foreground">
        הערכה בלבד, אינה מהווה הצעה או התחייבות. הריבית בפועל תלויה בפרופיל שלכם ובבנק.
      </p>
    </div>
  );
}
