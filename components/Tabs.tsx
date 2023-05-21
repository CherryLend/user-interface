import { Dispatch, SetStateAction } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

export type Tab = {
  label: string;
  content: React.ReactNode;
  badgeNumber?: number;
  tooltipText?: string;
};

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav className="-mb-px flex space-x-4" aria-label="Tabs">
      {tabs.map((tab, index) => (
        <div key={tab.label} className="relative">
          <button
            className={`${
              activeTab === index
                ? ""
                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            } whitespace-nowrap pb-2.5 px-1 font-bold uppercase text-md md:text-lg focus:outline-none relative transition`}
            onClick={() => setActiveTab(index)}
          >
            <div className="flex items-center space-x-3">
              {tab.label}
              {tab.tooltipText && (
                <>
                  <BsInfoCircle
                    className="h-4 w-4 ml-2"
                    aria-hidden="true"
                    data-tooltip-id="tab-tooltip"
                    data-tooltip-content={tab.tooltipText}
                  />
                  <Tooltip
                    id="tab-tooltip"
                    place="top"
                    className="z-20 !text-xs -translate-x-3"
                  />
                </>
              )}
              {tab.badgeNumber && (
                <span className="ml-2 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-[#F0A0B4] border border-black text-gray-800 text-xs">
                  {tab.badgeNumber}
                </span>
              )}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-10 w-full h-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#F0A1B4] to-[#8DBDDC] dark:bg-[#B64D83] rounded-full transition duration-300 ${
                activeTab !== index ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Tabs;
