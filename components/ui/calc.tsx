'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function MortgageCalculator() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const calcContainer = document.getElementById('calc-container');
    
    // Setup calculator configuration
    const setupCalculator = () => {
      try {
        // Create calculator div if it doesn't exist
        if (!document.getElementById('snpv_calc')) {
          const calcDiv = document.createElement('div');
          calcDiv.id = 'snpv_calc';
          calcDiv.setAttribute('data-type', 'T0lTTUxoYzZoR05hanhCR1JKck94dz09');
          calcContainer?.appendChild(calcDiv);
        }

        // Load external calculator script
        const script = document.createElement('script');
        script.src = "https://www.snpv.co.il/media/js/external_calculators.js";
        script.async = true;
        script.onload = () => setIsLoading(false);
        script.onerror = () => setError('Failed to load calculator script');
        document.body.appendChild(script);
      } catch (err) {
        setError('Error initializing calculator');
        console.error('Calculator initialization error:', err);
      }
    };

    // Check for jQuery and initialize calculator
    const initializeCalculator = () => {
      if ((window as any).jQuery) {
        setupCalculator();
      } else {
        window.addEventListener('jquery-loaded', setupCalculator);
      }
    };

    initializeCalculator();

    // Cleanup function
    return () => {
      window.removeEventListener('jquery-loaded', setupCalculator);
    };
  }, []);

  const handleJQueryLoad = () => {
    window.dispatchEvent(new Event('jquery-loaded'));
  };
  

  return (

        <>
      {/* Load jQuery with next/script */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
        onLoad={handleJQueryLoad}
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
      />
      
      {/* Load iframe resizer */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.contentWindow.min.js"
        strategy="afterInteractive"
      />
      
      {/* Container for the calculator */}
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
      </div>
        </>
  );
}