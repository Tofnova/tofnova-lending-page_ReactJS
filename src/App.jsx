import useSmoothScroll from "./hooks/useSmoothScroll";
import useGsapAnimations from "./hooks/useGsapAnimations";

import Cursor from "./components/layout/Cursor";
import Preloader from "./components/layout/Preloader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";

import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Skills from "./components/sections/Skills";
import Process from "./components/sections/Process";
import Team from "./components/sections/Team";
import Work from "./components/sections/Work";
import Faq from "./components/sections/Faq";
import CtaBand from "./components/sections/CtaBand";
import Contact from "./components/sections/Contact";

export default function App() {
  useSmoothScroll();
  useGsapAnimations();

  return (
    <>
      <Cursor />
      <Preloader />
      <Header />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Skills />
        <Process />
        <Team />
        <Work />
        <Faq />
        <CtaBand />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
