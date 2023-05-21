import React, { useState } from "react";

type Step = {
  label: string;
  content: React.ReactNode;
};

type StepperProps = {
  steps: Step[];
};

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`flex items-center ${index === 0 ? "" : "mt-8"}`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index === activeStep
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`flex-grow ml-4 text-lg ${
                index === activeStep ? "font-bold" : ""
              }`}
            >
              {step.label}
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className={`px-4 py-2 rounded ${
              activeStep === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            className={`px-4 py-2 rounded ${
              activeStep === steps.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>

        <div className="mt-8">{steps[activeStep].content}</div>
      </div>
    </div>
  );
};

export default Stepper;
