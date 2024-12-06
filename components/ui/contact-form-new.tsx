"use client";

import { handleContactForm } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from 'react-dom';

function SubmitButton() {
  return (
    <Button type="submit" className="w-full">
      שלח הודעה
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(handleContactForm, {});

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            שם מלא
          </label>
          <Input
            id="name"
            name="name"
            placeholder="ישראל ישראלי"
            aria-describedby="name-error"
          />
          {state.errors?.name && (
            <p className="text-sm text-red-500">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            טלפון
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="050-1234567"
            aria-describedby="phone-error"
          />
          {state.errors?.phone && (
            <p className="text-sm text-red-500">{state.errors.phone[0]}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          אימייל
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          aria-describedby="email-error"
        />
        {state.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          הודעה
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="כתוב את הודעתך כאן..."
          className="min-h-[120px]"
          aria-describedby="message-error"
        />
        {state.errors?.message && (
          <p className="text-sm text-red-500">{state.errors.message[0]}</p>
        )}
      </div>

      {state.message && (
        <p className={state.errors ? "text-red-500" : "text-green-500"}>
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
