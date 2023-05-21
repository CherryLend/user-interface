
type Step = {
  label: string;
  content: React.ReactNode;
};

type MultiStepProps = {
  steps: Step[];
  currentStep: number;
};

const MultiStep: React.FC<MultiStepProps> = ({ steps, currentStep }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center flex-grow last:flex-grow-0`}
          >
            {index !== 0 && (
              <div
                className={`w-16 h-[1px] ml-1 ${
                  index <= currentStep
                    ? "bg-[#FF2EE8]"
                    : "bg-black dark:bg-white"
                }`}
              />
            )}
            <div
              className={`w-1 h-1 rotate-45 mr-1 ${
                index === 0 || (index > 0 && index <= currentStep)
                  ? "bg-[#FF2EE8]"
                  : "bg-black dark:bg-white first:hidden"
              }`}
            />
            <p>{step.label}</p>
          </div>
        ))}
      </div>

      <div>{steps[currentStep].content}</div>

      {/* <div className="flex justify-between">
        <button
          className={`py-2 px-4 rounded-md ${
            currentStep === 0
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>

        <button
          className={`py-2 px-4 rounded-md ${
            currentStep === steps.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default MultiStep;
