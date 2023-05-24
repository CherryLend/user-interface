import { Archivo } from "next/font/google";
import Image from "next/image";
import Modal from "./Modal";
import RowButtonCard from "./RowButtonCard";
import { WalletType } from "@/types";
import { useState } from "react";

type CryptoWalletProps = {
  wallet?: WalletType | null;
  onWalletSelect?: (walletName: string) => void;
};

const font = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const CryptoWallet = ({ wallet, onWalletSelect }: CryptoWalletProps) => {
  const [copied, setCopied] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const formattedAmount = wallet?.token.amount.toLocaleString();
  const formattedAddress = `${wallet?.address.slice(
    0,
    5
  )}...${wallet?.address.slice(-8)}`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet?.address ?? "");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const wallets = ["Eternl", "Uphold", "Exodus"];

  return (
    <>
      {walletConnected && wallet ? (
        <div
          onClick={copyToClipboard}
          className={`z-10 cursor-pointer border border-black dark:border-white shadow overflow-hidden rounded-lg font-medium text-sm group ${font.className}`}
        >
          <div
            className={
              "bg-[#0DC8D6] bg-opacity-[.15] group-hover:bg-opacity-20 m-1 rounded-md py-[0.25rem]"
            }
          >
            <div className="flex items-center divide-x divide-black dark:divide-white">
              <p className="px-4">
                {formattedAmount} {wallet?.token.symbol}
              </p>
              <div className="flex items-center px-4">
                <div className="flex-shrink-0 text-xs">
                  <Image
                    className=""
                    src={`/images/wallets/${wallet?.name.toLowerCase()}.png`}
                    alt="Wallet Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="ml-2 flex-1 flex flex-col justify-between sm:flex-row sm:items-center">
                  <p className="w-28 text-center">
                    {copied ? "Copied!" : formattedAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={openModal}
          className={`z-10 border border-black dark:border-white py-3 px-5 uppercase font-bold rounded-lg hover:bg-black/10 leading-none active:scale-90 transition ${font.className}`}
        >
          Connect Wallet
        </button>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title={`Select a wallet`}
      >
        <div className="font-bold p-4 flex flex-col space-y-4">
          {wallets.map((w: string) => (
            <RowButtonCard
              key={w}
              onClick={() => {
                //@ts-ignore
                onWalletSelect?.(w);
                setWalletConnected(true);
                closeModal();
              }}
              imageSrc={`/images/wallets/${w.toLowerCase()}.png`}
              text={w}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default CryptoWallet;
