import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "האם הבנק מרוויח על חשבונכם? המדריך למשכנתא",
  description:
    "מדריך מעודכן לרפורמת המשכנתאות: בדקו אם אתם משלמים יותר מדי על המשכנתא שלכם וקבלו ליווי אישי מעדיאל כהן, יועץ משכנתאות.",
  alternates: { canonical: "/leads" },
  robots: { index: true, follow: true },
};

export default function LeadsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "מדריך משכנתא", path: "/leads" }]} />
      {children}
    </>
  );
}
