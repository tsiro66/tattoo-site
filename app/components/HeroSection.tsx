export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#e0e0e0]">
      {/* Typography BEHIND the 3D model */}
      <div className="absolute inset-0 z-10 flex items-start justify-center pt-[8vh]">
        <h1 className="font-[family-name:var(--font-syne)] text-[20vw] md:text-[14vw] font-black uppercase tracking-tighter text-black select-none leading-none">
          DA VINCI
        </h1>
      </div>

      {/* Left side text */}
      <div className="absolute left-8 bottom-[30%] z-10 max-w-lg">
        <p className="font-(family-name:--font-cinzel) tracking-widest text-lg md:text-2xl leading-relaxed text-black/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Scroll hint */}
      <p className="absolute bottom-8 right-8 z-10 tracking-widest font-bold uppercase text-black/70">
        Scroll to see more
      </p>
    </section>
  );
}
