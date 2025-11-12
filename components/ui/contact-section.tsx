import { contactInfo } from "@/lib/data/contact";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./card";
import Lead from "./lead";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 w-full ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">צור קשר</h2>
          <p className="text-xl text-gray-600 font-semibold">
            אשמח לעזור לך בכל שאלה או התייעצות בנושא משכנתאות
          </p>
        </div>


        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8 mx-auto">
          <Card>
            <a dir="ltr" href={`tel:${contactInfo.phone}`} className="text-gray-600 font-semibold hover:text-(--primary-color)">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Phone className="h-8 w-8 text-(--primary-color)" />
                <div className="text-center">
                  <h3 className="font-medium mb-1">טלפון</h3>
                  <span className="hidden md:block">
                  {contactInfo.phone}
                  </span>
                </div>
              </CardContent>
            </a>
          </Card>

          <Card>
            <a  href={`mailto:${contactInfo.email}`} className="text-gray-600 font-semibold hover:text-(--primary-color)">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Mail className="h-8 w-8 text-(--primary-color)" />
                <div className="text-center">
                  <h3 className="font-medium mb-1">אימייל</h3>
                  <span className="hidden md:block">
                  {contactInfo.email}
                  </span>
                </div>
              </CardContent>
            </a>
          </Card>
  
          <Card>
              <a href={"https://waze.com/ul?ll=31.89236134%2C34.81322765&navigate=yes"} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:text-(--primary-color)">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <MapPin className="h-8 w-8 text-(--primary-color)" />
                <div className="text-center">
                  <h3 className="font-medium mb-1">לניווט</h3>
                  <span className="hidden md:block">
                  {contactInfo.address}
                </span>
              </div>
            </CardContent>
              </a>
          </Card>
        </div>
        <Lead />

        {/* <div className="flex justify-center gap-6 mt-8">
          {contactInfo.socialMedia.facebook && (
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
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
        </div> */}

      </div>
    </section>
  );
}
