import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Image, { StaticImageData } from "next/image";

interface RowButtonCardProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  imageSrc: StaticImageData | string;
  text: string;
}

const RowButtonCard: React.FC<RowButtonCardProps> = ({
  imageSrc,
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="flex justify-between items-center border-4 border-[#FDECFD]/60 bg-[#F79DF3]/60 dark:bg-[#110032B8] rounded-xl w-full p-4 shadow-md hover:-translate-y-1 transition tracking-tight font-extrabold"
    >
      <p className="text-xl">{text}</p>
      <Image src={imageSrc} alt={text} width={40} height={40} />
    </button>
  );
};

export default RowButtonCard;
