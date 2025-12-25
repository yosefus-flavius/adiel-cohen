import { testimonials } from "@/lib/data/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card } from "./card";

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
          לקוחות מספרים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial._id}
              className=" rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative rounded-full bg-(--primary-color) text-white flex items-center justify-center h-16 w-16 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-8">ביקורות מגוגל</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.5321892301126!2d34.81554708484018!3d31.89213468124825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62257a41eb25afe5%3A0xac633c205ec1ae57!2z16LXk9eZ15DXnCDXm9eU158g15nXoteV16Ug157Xqdeb16DXqteQ15XXqg!5e0!3m2!1siw!2sin!4v1766634305060!5m2!1siw!2sin" className="w-full border-0 rounded-2xl shadow-md" width="1920" height="400" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}
