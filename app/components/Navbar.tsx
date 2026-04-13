export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-8 py-5 bg-transparent uppercase">
      {/* Left — Brand */}
      <a href="/" className="flex flex-col">
        <span className="font-[family-name:var(--font-cinzel)] text-base md:text-lg tracking-widest text-black leading-tight">
          Da Vinci
        </span>
        <span className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.25em] text-black/50">
          Tattoo Studio · Rhodes
        </span>
      </a>

      {/* Center — Nav links */}
      <div className="hidden md:flex items-center justify-center gap-40">
        <a href="#artists" className="text-xs tracking-widest text-black/60 hover:text-black transition-colors">
          Artists
        </a>
        <a href="#studio" className="text-xs tracking-widest text-black/60 hover:text-black transition-colors">
          Studio
        </a>
        <a href="#work" className="text-xs tracking-widest text-black/60 hover:text-black transition-colors">
          Our Work
        </a>
      </div>

      {/* Right — Book button */}
      <div className="flex justify-end">
        <a
          href="#book"
          className="flex items-center gap-2 text-xs tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Book
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
