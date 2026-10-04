import type { Metadata } from "next";
import { Heebo } from "next/font/google";
// @ts-ignore
import "./globals.css";
// import "./animations.css";
import { Footer } from "@/components/layout/footer";
// import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { contactInfo } from "@/lib/data/contact";
import { themeInitScript } from "@/lib/theme";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";

const heebo = Heebo({ subsets: ["hebrew", "latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adiel-cohen.co.il';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "עדיאל כהן - יועץ משכנתאות",
      url: siteUrl,
      inLanguage: "he-IL",
    },
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#business`,
      name: "עדיאל כהן - יועץ משכנתאות",
      url: siteUrl,
      image: `${siteUrl}/front.webp`,
      telephone: contactInfo.phone,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "מנדלי מוכר ספרים 2",
        addressLocality: "רחובות",
        addressCountry: "IL",
      },
      areaServed: "IL",
      founder: { "@type": "Person", name: "עדיאל כהן", jobTitle: "יועץ משכנתאות" },
      sameAs: [contactInfo.socialMedia.facebook],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "עדיאל כהן - הדרך הפשוטה למשכנתא שלך ",
    template: "%s | עדיאל כהן"
  },
  description: "יועץ משכנתאות  המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא. מספק ייעוץ מקצועי, אמין ומותאם אישית לצרכי הלקוח",
  keywords: ["יועץ משכנתאות", "משכנתא", "ייעוץ משכנתאות", "מימון לדירה", "הלוואת משכנתא", "עדיאל כהן"],
  authors: [{ name: "עדיאל כהן" }],
  creator: "עדיאל כהן",
  publisher: "עדיאל כהן",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://adiel-cohen.co.il'),
  openGraph: {
    title: "עדיאל כהן - הדרך הפשוטה למשכנתא שלך",
    description: "יועץ משכנתאות המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא",
    url: '/',
    siteName: "עדיאל כהן - יועץ משכנתאות",
    images: [
      {
        url: '/front.webp',
        width: 1200,
        height: 630,
        alt: 'עדיאל כהן - יועץ משכנתאות',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "עדיאל כהן - הדרך הפשוטה למשכנתא שלך",
    description: "יועץ משכנתאות המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא",
    images: ['/front.webp'],
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
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  // },
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
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${heebo.className}  bg-[hsl(var(--background))]`}>
        <div className="h-16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="IeFDnJo1Ey"
          strategy="lazyOnload"
          data-position="3"
        />
        {children}
        <Footer />
        {/* <ScrollToTop /> */}
        <WhatsAppFloat phoneNumber="+972537278461" />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />

      </body>
    </html>
  );
}
