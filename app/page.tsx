import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import About from "@/sections/about";
import Installations from "@/sections/installations";
import SuccessCases from "@/sections/success-cases";
import Schedule from "@/sections/schedule";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import Hero2 from "@/sections/hero2";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero2 />
      <Services />
      <About />
      <Installations />
      <SuccessCases />
      <Schedule />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
