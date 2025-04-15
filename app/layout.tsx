import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
// import "./animations.css";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const heebo = Heebo({ subsets: ["hebrew", "latin"] });

export const metadata: Metadata = {
  title: {
    default: "עדיאל כהן - יועץ משכנתאות מוסמך",
    template: "%s | עדיאל כהן"
  },
  description: "יועץ משכנתאות מוסמך המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא. מספק ייעוץ מקצועי, אמין ומותאם אישית לצרכי הלקוח",
  keywords: ["יועץ משכנתאות", "משכנתא", "ייעוץ משכנתאות", "מימון לדירה", "הלוואת משכנתא", "עדיאל כהן"],
  authors: [{ name: "עדיאל כהן" }],
  creator: "עדיאל כהן",
  publisher: "עדיאל כהן",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://adielcohen.co.il'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "עדיאל כהן - יועץ משכנתאות מוסמך",
    description: "יועץ משכנתאות מוסמך המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא",
    url: '/',
    siteName: "עדיאל כהן - יועץ משכנתאות",
    images: [
      {
        // TODO- change
        url: '/1.webp',
        width: 1200,
        height: 630,
        alt: 'עדיאל כהן - יועץ משכנתאות',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} bg-[hsl(var(--background))]`}>
        <div className="h-16" />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
