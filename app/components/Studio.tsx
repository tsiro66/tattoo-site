'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imagesRef.current?.children ?? [], { opacity: 0, scale: 0.95 });
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(textRef.current?.children ?? [], { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.9 })
            .to(
              imagesRef.current?.children ?? [],
              { opacity: 1, scale: 1, duration: 0.8, stagger: 0.12 },
              '-=0.5'
            )
            .to(
              textRef.current?.children ?? [],
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
              '-=0.5'
            );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="studio" className="min-h-screen bg-[#e0e0e0] text-black px-8 md:px-16 py-24">
      <div className="grid md:grid-cols-[1fr_40%_1fr] gap-8 items-start">
        {/* Left column — images */}
        <div ref={imagesRef} className="space-y-4">
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
          <h2
            ref={headingRef}
            className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            Studio
          </h2>
          <div ref={textRef} className="space-y-6">
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
