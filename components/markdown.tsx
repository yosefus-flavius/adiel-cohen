import { Fragment, ReactNode } from "react";

// Minimal, dependency-free Markdown renderer for blog posts.
// Supports: # / ## / ### headings, - / * bullet lists, 1. ordered lists, paragraphs,
// **bold**, *italic*, [text](url). Everything is rendered through React (no raw HTML),
// and only http(s), mailto, tel and site-relative links are allowed.
// Single newlines inside a paragraph stay line breaks, so existing plain-text posts look the same.

const SAFE_URL = /^(https?:\/\/|mailto:|tel:|\/|#)/i;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${i++}`;
    if (match[1] !== undefined) {
      nodes.push(<strong key={key}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      nodes.push(<em key={key}>{match[2]}</em>);
    } else if (SAFE_URL.test(match[4])) {
      const external = /^https?:\/\//i.test(match[4]);
      nodes.push(
        <a
          key={key}
          href={match[4]}
          className="text-[var(--color-brand-gold-text)] underline underline-offset-2 hover:no-underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[3]}
        </a>
      );
    } else {
      nodes.push(match[3]);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderLines(lines: string[], keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  lines.forEach((line, idx) => {
    if (idx > 0) out.push(<br key={`${keyPrefix}-br-${idx}`} />);
    out.push(<Fragment key={`${keyPrefix}-l-${idx}`}>{renderInline(line, `${keyPrefix}-${idx}`)}</Fragment>);
  });
  return out;
}

export function Markdown({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let n = 0;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(
        <p key={`p-${n++}`} className="mb-5 leading-8 text-slate-700">
          {renderLines(paragraph, `p${n}`)}
        </p>
      );
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      const Tag = list.ordered ? "ol" : "ul";
      blocks.push(
        <Tag
          key={`list-${n++}`}
          className={`mb-5 space-y-2 pr-6 leading-8 text-slate-700 ${list.ordered ? "list-decimal" : "list-disc"}`}
        >
          {list.items.map((item, i) => (
            <li key={i}>{renderInline(item, `li${n}-${i}`)}</li>
          ))}
        </Tag>
      );
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    const bullet = /^\s*[-*]\s+(.*)$/.exec(line);
    const ordered = /^\s*\d+[.)]\s+(.*)$/.exec(line);

    if (heading) {
      flushParagraph();
      flushList();
      // The page already has an h1 (post title), so # becomes h2, ## h3, ### h4.
      const level = heading[1].length + 1;
      const Tag = (`h${level}`) as "h2" | "h3" | "h4";
      const size = level === 2 ? "text-2xl" : level === 3 ? "text-xl" : "text-lg";
      blocks.push(
        <Tag key={`h-${n++}`} className={`${size} mt-10 mb-4 font-bold text-slate-900`}>
          {renderInline(heading[2], `h${n}`)}
        </Tag>
      );
    } else if (bullet || ordered) {
      flushParagraph();
      const isOrdered = !!ordered;
      if (list && list.ordered !== isOrdered) flushList();
      if (!list) list = { ordered: isOrdered, items: [] };
      list.items.push((bullet ?? ordered)![1]);
    } else if (line.trim() === "") {
      flushParagraph();
      flushList();
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();

  return <div className="max-w-none text-lg">{blocks}</div>;
}
