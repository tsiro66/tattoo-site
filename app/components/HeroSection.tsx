export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#e0e0e0]">
      {/* Typography BEHIND the 3D model */}
      <div className="absolute inset-0 z-10 flex items-start justify-center pt-[8vh]">
        <h1 className="font-[family-name:var(--font-syne)] text-[20vw] md:text-[14vw] font-black uppercase tracking-tighter text-black select-none leading-none">
          DA VINCI
        </h1>
      </div>

      {/* Scroll hint */}
      <p className="absolute bottom-8 right-8 z-10 tracking-widest font-bold uppercase text-black/70">
        Scroll to see more
      </p>
    </section>
  );
}
