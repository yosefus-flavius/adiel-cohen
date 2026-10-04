// Tiny shared store so the hero calculator and the contact section can show the same numbers.

export interface CalcState {
  amount: number;
  years: number;
  touched: boolean;
}

// Illustrative rate for the quick estimate only. Not an offer.
export const SAMPLE_RATE = 0.045;

const initial: CalcState = { amount: 1_200_000, years: 25, touched: false };
let state: CalcState = initial;
const listeners = new Set<() => void>();

export const getCalc = () => state;
export const getServerCalc = () => initial;

export function subscribeCalc(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setCalc(patch: Partial<Pick<CalcState, "amount" | "years">>) {
  state = { ...state, ...patch, touched: true };
  listeners.forEach((listener) => listener());
}

export function monthlyPayment(amount: number, years: number, rate = SAMPLE_RATE) {
  const r = rate / 12;
  const n = years * 12;
  return Math.round((amount * r) / (1 - Math.pow(1 + r, -n)));
}

export const formatILS = (value: number) =>
  new Intl.NumberFormat("he-IL").format(value) + " ₪";
