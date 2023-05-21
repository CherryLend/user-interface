import { Archivo } from "next/font/google";
import BottomCherry from "@/assets/img/bottom-cherry.png";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useDarkMode } from "@/contexts/DarkModeContext";

const font = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Layout = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <main
      className={`min-h-screen overflow-x-hidden relative ${font.className}`}
    >
      <Head>
        <title>{pageTitle + " - CherryLend"}</title>
      </Head>
      <Navbar />
      {children}
      <Image
        src={BottomCherry}
        alt="Bottom Cherry"
        width={700}
        height={700}
        className="absolute bottom-0 left-0 -z-10"
      />
    </main>
  );
};

export default Layout;
