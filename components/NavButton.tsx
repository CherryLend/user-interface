import { IconType } from "react-icons/lib";

interface NavButtonProps {
  icon: IconType;
  onClick: () => void;
  className?: string;
  srText?: string;
  mobileOnly?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  icon: Icon,
  onClick,
  className,
  srText,
  mobileOnly,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center p-2 py-2.5 rounded-lg border border-black dark:border-white hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 group transition ${className} ${
        mobileOnly ? "xl:hidden" : ""
      }`}
    >
      <span className="sr-only">{srText}</span>
      <Icon className="block h-5 w-6" aria-hidden="true" />
    </button>
  );
};

export default NavButton;
