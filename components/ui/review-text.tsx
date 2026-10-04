"use client";

import { useState } from "react";

const LONG_REVIEW = 180;

export function ReviewText({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const isLong = text.length > LONG_REVIEW;
  // New line after each full stop (not inside "..." or numbers like 4.5).
  const formatted = text.replace(/(?<!\.)\.\s+(?=\S)/g, ".\n");

  return (
    <div className="flex flex-col items-start gap-2">
      <blockquote
        className={`whitespace-pre-line leading-relaxed text-foreground ${isLong && !open ? "line-clamp-5" : ""}`}
      >
        {formatted}
      </blockquote>
      {isLong && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-sm font-medium text-[#1a73e8] hover:underline dark:text-[#8ab4f8]"
        >
          {open ? "הצג פחות" : "עוד"}
        </button>
      )}
    </div>
  );
}
