import React from "react";
import Switch from "react-switch";

import { useDarkMode } from "@/contexts/DarkModeContext";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const FundsSwitch: React.FC<SwitchProps> = ({
  checked,
  onChange,
}: SwitchProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <label
      htmlFor="funds-only"
      className="flex items-center space-x-1 text-sm font-bold cursor-pointer"
    >
      <span>Show only loan requests for which there are funds</span>
      <Switch
        onChange={onChange}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        className="[&>div]:border [&>div]:border-black dark:[&>div]:border-white [&>div.react-switch-bg]:bg-opacity-0 scale-[76%]"
        height={16}
        width={36}
        handleDiameter={20}
        offColor={isDarkMode ? "#47316f" : "#fddded"}
        onColor="#F0A0B4"
        id="funds-only"
      />
    </label>
  );
};

export default FundsSwitch;
