import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import TorsoScene from './components/TorsoScene';
import HeroSection from './components/HeroSection';
import Artists from './components/Artists';
import Studio from './components/Studio';
import OurWork from './components/OurWork';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <SmoothScroll />
      <Navbar />
      <TorsoScene />

      {/* Content sits above the fixed footer (z-10) */}
      <div className="relative z-10">
        <HeroSection />
        <Artists />
        <Studio />
        <OurWork />
      </div>

      {/* Spacer so you can scroll to reveal the footer */}
      <div className="relative z-10 h-[70vh]" />

      <Footer />
    </main>
  );
}
