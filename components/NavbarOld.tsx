import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/svg/CherryLendLogo.svg";

const NavbarOld: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 w-full">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-48" />
        </Link>
      </div>
      <div className="block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2"
        >
          <TiThMenu className="h-8 w-8" />
        </button>
      </div>
      <div className={`w-full block flex-grow ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm">
          <Link href="/about" className="block mt-4 hover:text-white">
            About
          </Link>
          <Link href="/services" className="block mt-4 hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="block mt-4 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOld;
