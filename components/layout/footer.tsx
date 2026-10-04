import { contactInfo } from "@/lib/data/contact";
import { Instagram, Linkedin, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { guestLinks } from "@/lib/data/nav-links";
import { ThemeSegmented } from "@/components/theme/theme-controls";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="container-main py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold">
                  <span className="text-[var(--color-brand-gold-text)]">עדיאל</span>
                  <span className="text-foreground"> כהן</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                יועץ משכנתאות המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא. מלווה אותך עד לקבלת המפתח.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {contactInfo.socialMedia.facebook && (
                  <a
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-[var(--color-brand-gold)] hover:text-slate-900 transition-all duration-300"
                  >
                    <p className="sr-only">Facebook</p>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </a>
                )}
                {contactInfo.socialMedia.linkedin && (
                  <a
                    href={contactInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-[var(--color-brand-gold)] hover:text-slate-900 transition-all duration-300"
                  >
                    <p className="sr-only">LinkedIn</p>
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {contactInfo.socialMedia.instagram && (
                  <a
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-[var(--color-brand-gold)] hover:text-slate-900 transition-all duration-300"
                  >
                    <p className="sr-only">Instagram</p>
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-foreground font-semibold mb-6">קישורים מהירים</h2>
              <ul className="space-y-3">
                {guestLinks.filter(l => !l.isButton).slice(0, 6).map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 group-hover:bg-[var(--color-brand-gold)] transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-foreground font-semibold mb-6">שירותים</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors">
                    ייעוץ משכנתאות
                  </Link>
                </li>
                <li>
                  <Link href="/restore" className="text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors">
                    מיחזור משכנתא
                  </Link>
                </li>
                <li>
                  <Link href="/calc" className="text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors">
                    מחשבון משכנתא
                  </Link>
                </li>
                <li>
                  <Link href="/leads" className="text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors">
                    המדריך למשכנתא
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-foreground font-semibold mb-6">פרטי התקשרות</h2>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="flex items-center gap-3 text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span dir="ltr">{contactInfo.phone}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>{contactInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={contactInfo.googleMap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[var(--color-brand-gold-text)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>{contactInfo.address}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        {/* Display mode */}
        <ThemeSegmented className="mt-12" />

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground text-sm">
              © {currentYear} עדיאל כהן. כל הזכויות שמורות.
            </p>
            <a 
              dir="ltr" 
              href="https://yosefus-flavius.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-[var(--color-brand-gold-text)] text-sm transition-colors flex items-center gap-1"
            >
              בניית אתרים - Yosefus-Flavius
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
