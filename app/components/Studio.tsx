export default function Studio() {
  return (
    <section id="studio" className="min-h-screen bg-[#e0e0e0] text-black px-8 md:px-16 py-24">
      <div className="grid md:grid-cols-[1fr_40%_1fr] gap-8 items-start">
        {/* Left column — images */}
        <div className="space-y-4">
          <div className="aspect-[4/3] bg-black/10 rounded-sm" />
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-black/10 rounded-sm" />
            <div className="aspect-square bg-black/10 rounded-sm" />
          </div>
        </div>

        {/* Center gap */}
        <div />

        {/* Right column — text */}
        <div>
          <h2 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Studio
          </h2>
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-cinzel)] text-base leading-relaxed text-black/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
              odio dui. Nulla vitae elit libero.
            </p>
            <p className="font-[family-name:var(--font-cinzel)] text-base leading-relaxed text-black/70">
              Cras mattis consectetur purus sit amet fermentum. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
