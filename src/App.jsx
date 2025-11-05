import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepNavigation from './components/StepNavigation';
import WhatIsCRM from './components/steps/WhatIsCRM';
import CompanyAnalysis from './components/steps/CompanyAnalysis';
import CRMRequirements from './components/steps/CRMRequirements';
import DevelopmentPhases from './components/steps/DevelopmentPhases';
import TechStack from './components/steps/TechStack';
import Timeline from './components/steps/Timeline';
import MaintenanceCost from './components/steps/MaintenanceCost';
import AIEnhancements from './components/steps/AIEnhancements';
import WhyMe from './components/steps/WhyMe';

const steps = [
  { id: 1, title: 'What is CRM?', component: WhatIsCRM },
  { id: 2, title: 'Company Analysis', component: CompanyAnalysis },
  { id: 3, title: 'CRM Requirements', component: CRMRequirements },
  { id: 4, title: 'Development Phases', component: DevelopmentPhases },
  { id: 5, title: 'Tech Stack', component: TechStack },
  { id: 6, title: 'Timeline & Budget', component: Timeline },
  { id: 7, title: 'Maintenance Costs', component: MaintenanceCost },
  { id: 8, title: "What's Next? (AI)", component: AIEnhancements },
  { id: 9, title: 'Why Me?', component: WhyMe },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 overflow-hidden">
      <StepNavigation 
        steps={steps}
        currentStep={currentStep}
        goToStep={goToStep}
      />
      
      <div className="pt-40 pb-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <CurrentStepComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              currentStep === 0
                ? 'bg-emerald-950/50 text-emerald-800 cursor-not-allowed'
                : 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 hover:bg-emerald-500/30'
            }`}
            whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          <div className="text-white text-lg">
            Step {currentStep + 1} of {steps.length}
          </div>

          <motion.button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              currentStep === steps.length - 1
                ? 'bg-emerald-950/50 text-emerald-800 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/50'
            }`}
            whileHover={currentStep !== steps.length - 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep !== steps.length - 1 ? { scale: 0.95 } : {}}
          >
            Next →
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
