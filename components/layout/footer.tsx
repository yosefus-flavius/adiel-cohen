import { contactInfo } from "@/lib/data/contact";
import { Instagram, Linkedin, Map } from "lucide-react";
import Link from "next/link";
import { guestLinks } from "./navbar";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">עדיאל כהן</h3>
            <p className="text-sm">
              יועץ משכנתאות  המתמחה בליווי אישי ומקצועי בתהליך לקיחת המשכנתא
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              {guestLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">פרטי התקשרות</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone}`} dir="ltr" target="_blank" className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} target="_blank" className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={contactInfo.googleMap} target="_blank" className="flex items-center gap-2 cursor-pointer" rel="noopener noreferrer">
                  <span >{contactInfo.address}</span>
                  <Map className="h-5 w-5" />
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {contactInfo.socialMedia.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
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
          <p>
            <a dir="ltr" href="https://yosefus-flavius.com/" target="_blank" rel="noopener noreferrer">
              ©
              Yosefus-Flavius
              בניית אתרים -
              כל הזכויות שמורות.
              {" "}
              {new Date().getFullYear()}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
