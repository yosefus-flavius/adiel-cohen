import { aboutInfo } from "@/lib/data/about";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-12 items-center">
          <div className="relative h-[450px] mt-12 md:mt-0 md:h-[600px] rounded-2xl">
            <Image
              src={aboutInfo.image}
              alt={aboutInfo.title}
              width={600}
              height={600}
              className="sm:object-cover sm:max-h-fit max-h-96 object-contain relative z-10"
            />
            <Image
              src={aboutInfo.backImage}
              alt={aboutInfo.title}
              width={600}
              height={600}
              className=" inset-0  -bottom-10 top-10 object-contain absolute z-3 -rotate-90"
            />

          </div>
          <article className="space-y-8 ">
            <h2 className="text-4xl font-bold tracking-tight ">{aboutInfo.title}</h2>
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
              <Image
                src={aboutInfo.unionImage}
                alt={aboutInfo.title}
                width={300}
                height={100}
                className=""
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
