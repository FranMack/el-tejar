import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Installations from "@/components/installations";
import SuccessCases from "@/components/success-cases";
import Schedule from "@/components/schedule";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

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
