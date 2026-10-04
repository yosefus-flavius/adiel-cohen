import Image from "next/image";

interface PageHeroProps {
  image: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/** Shared banner for inner pages: dark-slate photo hero, same in light and dark themes. */
export function PageHero({ image, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-16 md:py-24">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-slate-900/75" />
      <div className="container-main max-w-5xl text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
