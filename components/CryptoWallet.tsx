import { Archivo } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

import { WalletType } from "@/types";

type CryptoWalletProps = {
  wallet?: WalletType | null;
};

const font = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const CryptoWallet = ({ wallet }: CryptoWalletProps) => {
  const [copied, setCopied] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const formattedAmount = wallet?.token.amount.toLocaleString();
  const formattedAddress = `${wallet?.address.slice(
    0,
    5
  )}...${wallet?.address.slice(-8)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet?.address ?? "");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

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
                    src={`/images/${wallet?.name.toLowerCase()}.png`}
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
          onClick={() => setWalletConnected(true)}
          className={`z-10 border border-black dark:border-white py-3 px-5 uppercase font-bold rounded-lg hover:bg-black/10 leading-none active:scale-90 transition ${font.className}`}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default CryptoWallet;
