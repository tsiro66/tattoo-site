export default function OurWork() {
  return (
    <section id="work" className="min-h-screen bg-[#1a1a1a] text-white px-8 md:px-16 py-24">
      <div className="grid md:grid-cols-[1fr_40%_1fr] gap-8 items-start">
        {/* Left column */}
        <div>
          <h2 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Our Work
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10 rounded-sm" />
            ))}
          </div>
        </div>

        {/* Center gap */}
        <div />

        {/* Right column */}
        <div className="md:pt-24">
          <div className="grid grid-cols-2 gap-3 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10 rounded-sm" />
            ))}
          </div>
          <p className="font-[family-name:var(--font-cinzel)] text-base leading-relaxed text-white/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
            diam eget risus varius blandit sit amet non magna.
          </p>
        </div>
      </div>
    </section>
  );
}
