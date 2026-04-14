export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-0 bg-[#0a0a0a] text-white">
      <div className="h-[70vh] flex flex-col justify-between px-8 md:px-16 py-16">
        {/* Top — large CTA */}
        <div>
          <p className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.3em] uppercase text-white/30 mb-4">
            Ready to get inked?
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Book Your<br />Session
          </h2>
        </div>

        {/* Bottom — info grid */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
              Location
            </h3>
            <p className="font-[family-name:var(--font-cinzel)] text-sm leading-relaxed text-white/60">
              42 Old Town Street<br />
              Rhodes, Greece 85100
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
              Hours
            </h3>
            <p className="font-[family-name:var(--font-cinzel)] text-sm leading-relaxed text-white/60">
              Tue — Sat: 11:00 — 20:00<br />
              Sun — Mon: Closed
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
              Contact
            </h3>
            <p className="font-[family-name:var(--font-cinzel)] text-sm leading-relaxed text-white/60">
              studio@davinci-tattoo.gr<br />
              +30 22410 00000
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-end">
          <span className="font-[family-name:var(--font-cinzel)] text-xs text-white/20">
            &copy; 2026 Da Vinci Tattoo Studio
          </span>
          <span className="font-[family-name:var(--font-syne)] text-[10vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white/5 select-none">
            DV
          </span>
        </div>
      </div>
    </footer>
  );
}
