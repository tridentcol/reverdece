import React from 'react';
import { Check } from 'lucide-react';

const STEPS = [
  { id: 'shipping', title: 'Envío' },
  { id: 'payment', title: 'Pago' },
  { id: 'confirmation', title: 'Confirmación' }
];

const CheckoutSteps = ({ currentStep }) => {
  const getCurrentStepIndex = () => {
    return STEPS.findIndex(step => step.id === currentStep);
  };

  return (
    <nav className="mb-8">
      <ol className="flex items-center justify-center">
        {STEPS.map((step, index) => {
          const isCurrent = step.id === currentStep;
          const isComplete = getCurrentStepIndex() > index;

          return (
            <li key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${isComplete ? 'bg-green-500' : 
                    isCurrent ? 'bg-reverdece-600' : 'bg-gray-200'}
                  ${isComplete || isCurrent ? 'text-white' : 'text-gray-500'}
                `}>
                  {isComplete ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="mt-2 text-sm hidden md:block">
                  {step.title}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div className={`
                  w-12 md:w-24 h-1 mx-2
                  ${getCurrentStepIndex() > index ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CheckoutSteps;