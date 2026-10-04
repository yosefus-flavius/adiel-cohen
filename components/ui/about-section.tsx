import { aboutInfo, aboutTraining } from "@/lib/data/about";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding border-y border-border bg-card">
      <div className="container-main grid items-center gap-12 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[#F1E7CF] dark:bg-[#273449]">
            <Image
              src={aboutInfo.backImage}
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover opacity-50"
            />
            <Image
              src={aboutInfo.image}
              alt={aboutInfo.title}
              width={400}
              height={500}
              sizes="(max-width: 1024px) 90vw, 440px"
              className="relative block h-auto w-full"
            />
          </div>
          <p className="absolute -bottom-4 start-4 rounded-2xl bg-[var(--color-brand-gold)] px-5 py-3 text-base font-extrabold text-[#1B1405] shadow-md">
            חבר בהתאחדות יועצי המשכנתאות
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm font-bold text-[var(--color-brand-gold-text)]">אודות</p>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            {aboutInfo.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{aboutInfo.content}</p>
          <p className="text-lg leading-relaxed text-muted-foreground">{aboutInfo.experience}</p>

          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-white px-5 py-3">
            <Image
              src={aboutInfo.unionImage}
              alt="לשכת יועצי המשכנתאות"
              width={180}
              height={53}
              className="h-12 w-auto"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="mb-2 text-base font-bold text-[var(--color-brand-gold-text)]">הכשרה</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{aboutTraining}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="mb-2 text-base font-bold text-[var(--color-brand-gold-text)]">המטרה שלי</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{aboutInfo.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
