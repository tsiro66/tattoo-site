'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Start hidden
    gsap.set([titleRef.current, textRef.current, hintRef.current], {
      opacity: 0,
    });
    gsap.set(titleRef.current, { y: 60 });
    gsap.set(textRef.current, { x: -40 });
    gsap.set(hintRef.current, { y: 20 });

    const onReady = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.2 })
        .to(textRef.current, { opacity: 1, x: 0, duration: 0.9 }, '-=0.7')
        .to(hintRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
    };

    window.addEventListener('preloader-done', onReady);
    return () => window.removeEventListener('preloader-done', onReady);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#e0e0e0]">
      {/* Typography BEHIND the 3D model */}
      <div className="absolute inset-0 z-10 flex items-start justify-center pt-[8vh]">
        <h1
          ref={titleRef}
          className="font-[family-name:var(--font-syne)] text-[20vw] md:text-[14vw] font-black uppercase tracking-tighter text-black select-none leading-none"
        >
          DA VINCI
        </h1>
      </div>

      {/* Left side text */}
      <div ref={textRef} className="absolute left-8 bottom-[30%] z-10 max-w-lg">
        <p className="font-(family-name:--font-cinzel) tracking-widest text-lg md:text-2xl text-black/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Scroll hint */}
      <p
        ref={hintRef}
        className="absolute bottom-8 right-8 z-10 tracking-widest font-bold uppercase text-black/70"
      >
        Scroll to see more
      </p>
    </section>
  );
}
