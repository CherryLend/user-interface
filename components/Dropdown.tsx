import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

export type Option = {
  label: string;
  value: string;
};

interface DropdownProps {
  options: Option[];
  onOptionSelect: (option: Option) => void;
  className?: string;
  listClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onOptionSelect,
  className,
  listClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative inline-block text-left w-full">
      <button
        className={`dropdown ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-md">{selectedOption.label}</p>
        <HiChevronDown className="text-xl mt-0.5" />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 z-50 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden ${listClassName}`}
        >
          <div
            className="py-1 h-40 overflow-y-scroll"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className="block pl-4 pr-10 py-2 text-gray-700 w-full text-left hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  onOptionSelect(option);
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
