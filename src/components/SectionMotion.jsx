import React, { useEffect, useRef, useState } from 'react';

const InvestmentSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const lastScrollTime = useRef(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Throttle scroll events - only update every 100ms
      const now = Date.now();
      if (now - lastScrollTime.current < 100) return;
      lastScrollTime.current = now;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress when section is in view
      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        // Track when section first comes into view
        if (!hasStarted) {
          setHasStarted(true);
        }
        
        const scrolled = viewportHeight - rect.top;
        const progress = Math.max(0, Math.min(1, (scrolled - 200) / (sectionHeight - 600)));
        setScrollProgress(progress);
        
        // Only start transitions when section is fully visible (progress > 0)
        if (progress > 0) {
          // Determine active step based on scroll progress
          if (progress < 0.8) {
            setActiveStep(0);
          } else if (progress < 1.0) {
            setActiveStep(1);
          } else if (progress < 1.5) {
            setActiveStep(2);
          } else {
            setActiveStep(3);
          }
        }
      } else {
        // Reset when section is out of view
        if (hasStarted) {
          setHasStarted(false);
          setActiveStep(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-cyan-100 to-cyan-50 overflow-hidden"
      style={{ minHeight: '120vh' }}
    >
      {/* Sticky Container */}
      <div 
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mulai investasi untuk growth maksimal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beragam pilihan investasi ada di wondr! Mulai produk berisiko rendah sampai berjangka panjang, 
              pilih yang sesuai dengan kebutuhan dan profil risiko kamu.
            </p>
          </div>

          {/* Main Illustration Container */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* SVG Sequential Display */}
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
              {/* 1.svg - First step */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                style={{
                  opacity: activeStep === 0 ? 1 : 0,
                  transform: `translateY(${activeStep === 0 ? 0 : 30}px) scale(${activeStep === 0 ? 1 : 0.8})`,
                  zIndex: activeStep === 0 ? 10 : 1
                }}
              >
                <img 
                  src="/1.svg" 
                  alt="Investment Illustration 1" 
                  className="w-full h-full object-contain scale-125"
                />
              </div>

              {/* 2.svg - Second step */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                style={{
                  opacity: activeStep === 1 ? 1 : 0,
                  transform: `translateY(${activeStep === 1 ? 0 : 30}px) scale(${activeStep === 1 ? 1 : 0.8})`,
                  zIndex: activeStep === 1 ? 10 : 1
                }}
              >
                <img 
                  src="/2.svg" 
                  alt="Investment Illustration 2" 
                  className="w-full h-full object-contain scale-125"
                />
              </div>

              {/* 3-1.svg - Third step */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                style={{
                  opacity: activeStep === 2 ? 1 : 0,
                  transform: `translateY(${activeStep === 2 ? 0 : 30}px) scale(${activeStep === 2 ? 1 : 0.8})`,
                  zIndex: activeStep === 2 ? 10 : 1
                }}
              >
                <img 
                  src="/3-2.svg" 
                  alt="Investment Illustration 3-1" 
                  className="w-full h-full object-contain scale-125"
                />
              </div>

              {/* 3-2.svg - Fourth step */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                style={{
                  opacity: activeStep === 3 ? 1 : 0,
                  transform: `translateY(${activeStep === 3 ? 0 : 30}px) scale(${activeStep === 3 ? 1 : 0.8})`,
                  zIndex: activeStep === 3 ? 10 : 1
                }}
              >
                <img 
                  src="/3-2.svg" 
                  alt="Investment Illustration 3-2" 
                  className="w-full h-full object-contain scale-125"
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;