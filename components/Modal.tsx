import React, { ReactNode } from "react";
import { Archivo } from "next/font/google";
import { FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";

const font = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  title,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=""
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <div
        className={`bg-gradient-to-b from-[#ffd9ec] dark:from-[#3B1D75] to-[#ffd9ec] dark:to-[#9C195A] border-2 border-white rounded-xl overflow-hidden divide-y-2 divide-white ${font.className}`}
      >
        <div className="flex px-4 py-4 bg-gradient-to-b dark:from-[#434282] from-transparent to-[#f69df3] dark:to-transparent relative">
          <h2 className="text-2xl w-full tracking-tighter drop-shadow-md uppercase font-extrabold text-center">
            {title}
          </h2>
          <button onClick={onRequestClose} className="absolute right-3 top-3">
            <FaTimes />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
