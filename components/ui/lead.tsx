'use client'

import { sendEmail } from '@/actions/emails';
import { formatILS, monthlyPayment } from '@/lib/calc-store';
import { useId, useState } from 'react';
import { useCalc } from './calc-card';

type FieldErrors = Partial<Record<'name' | 'phone' | 'email', string>>;

const inputClass =
   'min-h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground aria-[invalid=true]:border-destructive';

function validate(data: { name: string; phone: string; email: string }): FieldErrors {
   const errors: FieldErrors = {};
   if (data.name.trim().length < 2) errors.name = 'נא להזין שם מלא';
   if (!/^[0-9+\-\s]{9,15}$/.test(data.phone.trim())) errors.phone = 'נא להזין מספר טלפון תקין';
   if (data.email.trim() && !/^\S+@\S+\.\S+$/.test(data.email.trim())) errors.email = 'כתובת האימייל אינה תקינה';
   return errors;
}

export default function Lead() {
   const id = useId();
   const calc = useCalc();
   const [errors, setErrors] = useState<FieldErrors>({});
   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const data = {
         name: String(form.get('name') ?? ''),
         phone: String(form.get('phone') ?? ''),
         email: String(form.get('email') ?? ''),
         message: String(form.get('message') ?? ''),
      };

      const found = validate(data);
      setErrors(found);
      if (Object.keys(found).length) return;

      // If the visitor used the calculator, pass their numbers along with the message.
      const calcNote = calc.touched
         ? `\n\n[נתוני מחשבון באתר] סכום ${formatILS(calc.amount)}, ${calc.years} שנים, החזר משוער ${formatILS(monthlyPayment(calc.amount, calc.years))}`
         : '';

      setStatus('loading');
      try {
         const response = await sendEmail({
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: `${data.message.trim()}${calcNote}`.trim(),
            subject: 'פנייה מהאתר',
         });
         setStatus(response.success ? 'success' : 'error');
      } catch {
         setStatus('error');
      }
   };

   if (status === 'success') {
      return (
         <div role="status" className="flex min-h-80 items-center justify-center rounded-3xl border border-border bg-card p-8 text-center">
            <p className="text-xl font-bold text-foreground">תודה! קיבלתי את הפרטים ואחזור אליכם בהקדם.</p>
         </div>
      );
   }

   return (
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
         <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-name`} className="font-semibold text-foreground">שם מלא</label>
            <input id={`${id}-name`} name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name}
               aria-describedby={errors.name ? `${id}-name-err` : undefined} className={inputClass} />
            {errors.name && <p id={`${id}-name-err`} role="alert" className="text-sm text-destructive">{errors.name}</p>}
         </div>

         <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-phone`} className="font-semibold text-foreground">טלפון</label>
            <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!errors.phone}
               aria-describedby={errors.phone ? `${id}-phone-err` : undefined} className={inputClass} dir="ltr" style={{ textAlign: 'right' }} />
            {errors.phone && <p id={`${id}-phone-err`} role="alert" className="text-sm text-destructive">{errors.phone}</p>}
         </div>

         <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-email`} className="font-semibold text-foreground">
               אימייל <span className="font-normal text-muted-foreground">(לא חובה)</span>
            </label>
            <input id={`${id}-email`} name="email" type="email" autoComplete="email" aria-invalid={!!errors.email}
               aria-describedby={errors.email ? `${id}-email-err` : undefined} className={inputClass} dir="ltr" style={{ textAlign: 'right' }} />
            {errors.email && <p id={`${id}-email-err`} role="alert" className="text-sm text-destructive">{errors.email}</p>}
         </div>

         <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-message`} className="font-semibold text-foreground">
               איך אפשר לעזור? <span className="font-normal text-muted-foreground">(לא חובה)</span>
            </label>
            <textarea id={`${id}-message`} name="message" rows={3}
               className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground" />
         </div>

         {status === 'error' && (
            <p role="alert" className="text-sm text-destructive">
               לא הצלחנו לשלוח כרגע. אפשר להתקשר או לכתוב בוואטסאפ, או לנסות שוב בעוד רגע.
            </p>
         )}

         <button
            type="submit"
            disabled={status === 'loading'}
            className="min-h-14 rounded-2xl bg-[var(--color-brand-gold)] px-6 text-lg font-extrabold text-[#1B1405] transition-colors hover:bg-[var(--color-brand-gold-dark)] disabled:opacity-60"
         >
            {status === 'loading' ? 'שולח...' : 'שלחו לי הצעה'}
         </button>
      </form>
   );
}
