import { Poppins } from "next/font/google";

import NavbarOld from "@/components/NavbarOld";
import Hero from "@/components/Hero";
import WhyCherryLendSection from "@/components/WhyCherryLendSection";
import ClientsSection from "@/components/ClientsSection";
import CommunitySection from "@/components/CommunitySection";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen overflow-hidden ${font.className}`}>
      <NavbarOld />
      <Hero />
      <WhyCherryLendSection />
      <ClientsSection />
      <CommunitySection />
    </main>
  );
}
