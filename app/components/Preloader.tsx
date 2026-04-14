'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Simulate loading progress — GLB is 64MB so give it time
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // Pause at 100% then animate out
        setTimeout(() => {
          setDone(true);
          window.dispatchEvent(new CustomEvent('preloader-done'));
        }, 400);
        setTimeout(() => setHidden(true), 1400);
      }
      setProgress(Math.min(Math.round(current), 100));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-700 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Brand */}
      <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-12">
        Da Vinci
      </h1>

      {/* Progress bar */}
      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-[0.3em] text-white/40 mt-4">
        {progress}%
      </span>
    </div>
  );
}
