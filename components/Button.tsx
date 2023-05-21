
import { IconType } from "react-icons/lib";

interface Props {
  icon?: IconType;
  onClick?: () => void;
  type?: string;
  className?: string;
  srText?: string;
  children?: React.ReactNode;
  mobileOnly?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  icon: Icon,
  onClick,
  type,
  className,
  srText,
  children,
  mobileOnly,
  disabled,
}) => {
  const types = {
    modal:
      "w-full my-2 uppercase text-lg tracking-tighter !font-extrabold border-2 !border-[#E871DC]",
    modalFill: "",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button group ${className} ${mobileOnly ? "xl:hidden" : ""}`}
    >
      {srText && <span className="sr-only">{srText}</span>}
      {children}
      {Icon && (
        <Icon className="block h-5 w-6 translate-x-3" aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
