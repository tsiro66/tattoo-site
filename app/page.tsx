import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import TorsoScene from './components/TorsoScene';
import HeroSection from './components/HeroSection';
import Artists from './components/Artists';
import Studio from './components/Studio';
import OurWork from './components/OurWork';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <SmoothScroll />
      <Navbar />
      <TorsoScene />
      <HeroSection />
      <Artists />
      <Studio />
      <OurWork />
    </main>
  );
}
