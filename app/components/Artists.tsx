'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Artists() {
  const artists = [
    { name: 'Artist Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus.' },
    { name: 'Artist Name', desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, descRef.current], { opacity: 0, y: 50 });
      gsap.set(cardsRef.current?.children ?? [], { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.9 })
            .to(descRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
            .to(
              cardsRef.current?.children ?? [],
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
              '-=0.4'
            );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="artists" className="min-h-screen bg-[#1a1a1a] text-white px-8 md:px-16 py-24">
      <div className="grid md:grid-cols-[1fr_40%_1fr] gap-8 items-start">
        {/* Left column */}
        <div>
          <h2
            ref={headingRef}
            className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            Artists
          </h2>
          <p
            ref={descRef}
            className="font-[family-name:var(--font-cinzel)] text-base leading-relaxed text-white/50 max-w-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo cursus magna vel scelerisque.
          </p>
        </div>

        {/* Center gap */}
        <div />

        {/* Right column */}
        <div ref={cardsRef} className="space-y-10">
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
