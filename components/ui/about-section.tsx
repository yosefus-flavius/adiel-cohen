import Image from "next/image";
import { aboutInfo } from "@/lib/data/about";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={aboutInfo.image}
              alt={aboutInfo.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">{aboutInfo.title}</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>{aboutInfo.content}</p>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">החזון שלי</h3>
                <p>{aboutInfo.vision}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">ניסיון מקצועי</h3>
                <p>{aboutInfo.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
