import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="עדיאל כהן - יועץ משכנתאות"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          quality={70}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/60" />
      </div>

      {/* Decorative Elements */}
      <div aria-hidden="true" className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-brand-gold)] rounded-full blur-[100px] opacity-10" />
      <div aria-hidden="true" className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-brand-gold)] rounded-full blur-[120px] opacity-5" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              עדיאל כהן
              <br />
              <span className="text-[var(--color-brand-gold)]">
                יועץ משכנתאות מוסמך
              </span>
            </h1>

          {/* Subtitle */}
          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              מלווה אותך לאורך כל הדרך למשכנתא המושלמת עבורך
              {' '}
              <br className="hidden sm:block" />
              עם ליווי אישי, מקצועי ואנושי
            </p>

          {/* CTA Buttons */}
          <div className="hero-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="mt-10 md:mt-12 flex sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group relative px-5 flex hover:-translate-y-0.5 active:scale-[0.98] items-center gap-2 py-2 bg-[var(--color-brand-gold)] text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-[var(--color-brand-gold)]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-brand-gold)]/40"
              >
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                <span className="relative z-10 flex items-center gap-2">
                  דבר איתי
                </span>
              </a>
              
              <a
                href="#about"
                className="px-5 py-2 hover:-translate-y-0.5 active:scale-[0.98] bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                קצת עלי
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="hero-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ליווי אישי</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>חיסכון משמעותי</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>מחזור משכנתא</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
