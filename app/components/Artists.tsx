export default function Artists() {
  const artists = [
    { name: 'Marcus Aurelius', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus.' },
    { name: 'Elena Kostas', desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.' },
  ];

  return (
    <section id="artists" className="min-h-screen bg-[#1a1a1a] text-white px-8 md:px-16 py-24">
      {/* Two-sided layout: heading left, content right, center clear */}
      <div className="grid md:grid-cols-[1fr_40%_1fr] gap-8 items-start">
        {/* Left column */}
        <div>
          <h2 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Artists
          </h2>
          <p className="font-[family-name:var(--font-cinzel)] text-base leading-relaxed text-white/50 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo cursus magna vel scelerisque.
          </p>
        </div>

        {/* Center gap — statue lives here */}
        <div />

        {/* Right column */}
        <div className="space-y-10">
          {artists.map((artist) => (
            <div key={artist.name} className="space-y-2">
              <div className="w-full aspect-[3/2] bg-white/10 rounded-sm" />
              <h3 className="font-[family-name:var(--font-cinzel)] text-lg tracking-wider">
                {artist.name}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {artist.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
