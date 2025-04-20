'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function MortgageCalculator() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="calc" className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6 rtl">חישוב משכנתא</h2>
      <p className="text-center text-gray-600 mb-12">השתמשו במחשבון כדי לחשב את המשכנתא שלכם</p>

      <div id="calc-container" className="max-w-4xl mx-auto">
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        {error && (
          <div className="bg-red-50 p-4 rounded-md border border-red-200 text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
            >
              נסו שוב
            </button>
          </div>
        )}
        <div id="snpv_calc" data-type="T0lTTUxoYzZoR05hanhCR1JKck94dz09"></div>
      </div>

      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
        onError={() => setError('Failed to load jQuery')}
      />

      <Script
        src="https://www.snpv.co.il/media/js/external_calculators.js"
        strategy="afterInteractive"
        onLoad={() => setIsLoading(false)}
        onError={() => setError('Failed to load calculator script')}
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.contentWindow.min.js"
        strategy="afterInteractive"
      />
    </section>
  );
}