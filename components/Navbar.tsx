import { HiMenu, HiOutlineMoon, HiOutlineSun, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";

import HistoryIcon from "@/icons/HistoryIcon";
import LeftCherryDark from "@/assets/img/left-cherry-dark.png";
import LeftCherryLight from "@/assets/img/left-cherry-light.png";
import Logo from "@/assets/img/CherryLendLogo.png";
import LogoDark from "@/assets/img/CherryLendLogoDark.png";
import RightCherryDark from "@/assets/img/right-cherry-dark.png";
import RightCherryLight from "@/assets/img/right-cherry-light.png";
import SettingsIcon from "@/icons/SettingsIcon";
import { WalletType } from "@/types";
import { useDarkMode } from "@/contexts/DarkModeContext";

import NavButton from "./NavButton";
import CryptoWallet from "./CryptoWallet";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/overview", label: "Overview" },
  { href: "/loans", label: "Your Loans" },
  { href: "/governance", label: "Governance" },
];

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const wallet: WalletType = {
  name: "Eternl",
  address: "addr1e5u8jg7mftth5u6x9d0rs0c6rua58y7gxqx6lyz1h",
  token: {
    amount: 3366.43,
    symbol: "₳",
  },
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  console.log("Navbar", isDarkMode);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`border-b-2 border-lightblue/50 dark:border-[#FFA8D4]/30 ${font.className}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold">
                <Image
                  src={isDarkMode ? LogoDark : Logo}
                  alt="Logo"
                  className="w-48"
                />
              </Link>
            </div>
            <div className="hidden xl:block">
              <div className="ml-10 flex items-baseline space-x-2 2xl:space-x-4 -mb-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative bg-gradient-to-t group rounded-md font-medium transition duration-500`}
                  >
                    <div
                      className={`absolute h-full w-full bg-gradient-to-t from-[#88B8FF]/50 dark:from-[#B64D83]/50 blur group-hover:opacity-100 transition duration-300 ${
                        router.pathname === link.href
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    <div className="relative mt-8 mb-7 mx-2">{link.label}</div>
                    <div
                      className={`relative z-10 w-full h-1.5 opacity-0 group-hover:opacity-100 bg-[#46A1F9] dark:bg-[#B64D83] rounded-full transition duration-300 ${
                        router.pathname !== link.href
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <Image
                src={isDarkMode ? LeftCherryDark : LeftCherryLight}
                alt="Left Cherry Top Bar"
                className="pointer-events-none w-16 scale-[290%] translate-x-10 translate-y-12"
              />
              <Image
                src={isDarkMode ? RightCherryDark : RightCherryLight}
                alt="Right Cherry Top Bar"
                className="pointer-events-none w-16 scale-[380%] translate-x-32 translate-y-11"
              />
            </div>
          </div>
          <div className="-mr-2 flex space-x-2 items-center my-3">
            <div className="hidden xl:block">
              <CryptoWallet wallet={wallet} />
            </div>
            <NavButton
              onClick={toggleDarkMode}
              srText="Toggle Dark Mode"
              icon={isDarkMode ? HiOutlineSun : HiOutlineMoon}
            />
            <NavButton
              onClick={toggleMenu}
              srText="Open History"
              icon={HistoryIcon}
            />
            <NavButton
              onClick={toggleMenu}
              srText="Open Settings"
              icon={SettingsIcon}
            />
            <NavButton
              onClick={toggleMenu}
              srText="Open Main Menu"
              icon={menuOpen ? HiX : HiMenu}
              mobileOnly
            />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <CryptoWallet wallet={wallet} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
