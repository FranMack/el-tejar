import Navbar from "@/sections/navbar";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import About from "@/sections/about";
import Installations from "@/sections/installations";
import SuccessCases from "@/sections/success-cases";
import Schedule from "@/sections/schedule";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import WhatsAppButton from "@/sections/whatsapp-button";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
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
