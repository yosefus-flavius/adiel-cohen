import { contactInfo } from "@/lib/data/contact";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./card";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 w-full ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">צור קשר</h2>
          <p className="text-xl text-gray-600">
            אשמח לעזור לך בכל שאלה או התייעצות בנושא משכנתאות
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mx-auto">
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Phone className="h-8 w-8 text-[var(--primary-color)]" />
              <div className="text-center">
                <h3 className="font-medium mb-1">טלפון</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-[var(--primary-color)]">
                  {contactInfo.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Mail className="h-8 w-8 text-[var(--primary-color)]" />
              <div className="text-center">
                <h3 className="font-medium mb-1">אימייל</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-[var(--primary-color)]">
                  {contactInfo.email}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <MapPin className="h-8 w-8 text-[var(--primary-color)]" />
            <div className="text-center">
              <h3 className="font-medium mb-1">כתובת</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-6 mt-8">
          {contactInfo.socialMedia.facebook && (
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          )}
          {contactInfo.socialMedia.linkedin && (
            <a
              href={contactInfo.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          )}
          {contactInfo.socialMedia.instagram && (
            <a
              href={contactInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
