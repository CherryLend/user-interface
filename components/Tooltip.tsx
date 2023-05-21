import { BsCheck, BsInfoCircle, BsX } from "react-icons/bs";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Assuming you have the appropriate library for tooltips installed

import { useDarkMode } from "@/contexts/DarkModeContext";

interface TooltipProps {
  id: string;
  content: string | number;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ id, content, className }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="absolute -right-6 top-1/2 -translate-y-1/2">
      <BsInfoCircle
        className="h-4 w-4 bg-green-400 dark:bg-black rounded-full"
        aria-hidden="true"
        data-tooltip-id={id}
        // data-tooltip-content={content}
      />
      <ReactTooltip
        id={id}
        place="top"
        className={`z-20 !text-xs !sm:text-sm !rounded-lg !p-0`}
        classNameArrow={`border-b border-r ${
          !isDarkMode
            ? "!bg-[#AEDCFF] border-[#57B6FF]"
            : "!bg-[#B65084] border-[#C076A4]"
        }`}
      >
        <div className="flex items-center text-sm text-black dark:text-white space-x-1 bg-[#AEDCFF] dark:bg-[#B65084] border border-[#57B6FF] dark:border-[#C076A4] rounded-lg px-2 py-1.5">
          <p>{content}</p>
          {(((typeof content === "string" && parseInt(content)) ||
            content) as number) > 1000 ? (
            <div className="flex items-center border border-[#7D004B4D] dark:border-[#651E54] rounded-full bg-[#41ACFFCC] dark:bg-[#934B82] py-0.5 px-1.5">
              <BsCheck className="text-green-700 dark:text-green-400 drop-shadow" />
              <p className="text-xs uppercase">Healthy</p>
            </div>
          ) : (
            <div className="flex items-center border border-[#7D004B4D] dark:border-[#651E54] rounded-full bg-[#41ACFFCC] dark:bg-[#934B82] py-0.5 px-1">
              <BsX className="text-red-700 dark:text-red-400 drop-shadow" />
              <p className="text-xs uppercase">Unhealthy</p>
            </div>
          )}
        </div>
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;
