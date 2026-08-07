import { About } from "@/components/About";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Segments } from "@/components/Segments";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Segments />
        <About />
        <Services />
        <Process />
        <Cases />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
