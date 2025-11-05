import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StepNavigation = ({ steps, currentStep, goToStep }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [steps]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-emerald-950/95 backdrop-blur-lg border-b border-emerald-800/30 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Lopes2tech CRM Roadmap
          </motion.h1>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showLeftArrow ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-800/90 backdrop-blur-sm text-emerald-100 rounded-full w-8 h-8 flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg ${
              !showLeftArrow && 'pointer-events-none'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
          </motion.button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <motion.button
                  onClick={() => goToStep(index)}
                  className={`text-left px-4 py-2 rounded-lg transition-all min-w-[140px] ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : index < currentStep
                      ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                      : 'bg-emerald-950/30 text-emerald-400/60 hover:bg-emerald-950/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-xs opacity-75">Step {step.id}</div>
                  <div className="text-sm font-semibold truncate">{step.title}</div>
                </motion.button>
                
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 flex-shrink-0 ${
                    index < currentStep ? 'bg-emerald-400' : 'bg-emerald-800/30'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showRightArrow ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-800/90 backdrop-blur-sm text-emerald-100 rounded-full w-8 h-8 flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg ${
              !showRightArrow && 'pointer-events-none'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default StepNavigation;
