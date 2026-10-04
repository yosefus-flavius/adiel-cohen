import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] bg-background grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[var(--color-brand-gold-text)]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          הדף לא נמצא
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          מצטערים, לא הצלחנו למצוא את הכתבה המבוקשת.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blog"
            className="rounded-xl bg-[var(--color-brand-gold)] px-5 py-3 text-sm font-bold text-[#1B1405] shadow-sm hover:bg-[var(--color-brand-gold-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            חזרה לכתבות
          </Link>
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-[var(--color-brand-gold-text)]">
            דף הבית <span aria-hidden="true">&larr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
