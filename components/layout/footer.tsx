import Link from "next/link";
import { contactInfo } from "@/lib/data/contact";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">עדיאל כהן</h3>
            <p className="text-sm">
              יועץ משכנתאות מוסמך המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  בלוג
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">פרטי התקשרות</h3>
            <ul className="space-y-2 text-sm">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li>{contactInfo.address}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {contactInfo.socialMedia.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {contactInfo.socialMedia.linkedin && (
                <a
                  href={contactInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {contactInfo.socialMedia.instagram && (
                <a
                  href={contactInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} עדיאל כהן. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
