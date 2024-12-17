import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black">
      <Image
        src="/hero-bg.webp"
        alt="עדיאל כהן - יועץ משכנתאות"
        fill
        className="object-cover opacity-70 z-[1]"
        priority
      />
      <Image
        src='/hero-house.webp'
        alt={'house'}
        className="absolute md:bottom-3 z-[2] left-3 -bottom-20"
        width={600}
        height={600}
      />
      <div className="absolute inset-0 z-[2]  bg-gradient-to-b from-black/60 to-black/30" />
      <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          המומחה שלך לייעוץ משכנתאות
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-200">
          מלווה אותך לאורך כל הדרך למשכנתא המושלמת עבורך
        </p>
        <div className="mt-10 flex gap-x-6">
          <a
            href="#contact"
            className="rounded-md  px-6 py-3 text-lg font-semibold text-white shadow-sm bg-[var(--primary-color)] hover:bg-black"
          >
            דבר איתי
          </a>
          <a
            href="#about"
            className="rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:/10"
          >
            קרא עוד
          </a>
        </div>
      </div>
    </div>
  );
}
