import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Image, { StaticImageData } from "next/image";

interface ButtonCardProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  imageSrc: StaticImageData | string;
  description: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  title,
  imageSrc,
  description,
  ...props
}) => {
  return (
    <button
      {...props}
      className="flex flex-col items-center border-4 border-[#FDECFD]/60 bg-[#F79DF3]/60 dark:bg-[#110032B8] rounded-xl w-72 sm:h-72 p-4 shadow-md hover:-translate-y-4 transition tracking-tight font-extrabold"
    >
      <h6 className="text-2xl">{title}</h6>
      <Image src={imageSrc} alt={title} className="w-40 h-40" />
      <p className="px-2 pt-2">{description}</p>
    </button>
  );
};

export default ButtonCard;
