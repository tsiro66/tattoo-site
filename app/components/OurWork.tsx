'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftGridRef = useRef<HTMLDivElement>(null);
  const rightGridRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(leftGridRef.current?.children ?? [], { opacity: 0, y: 30 });
      gsap.set(rightGridRef.current?.children ?? [], { opacity: 0, y: 30 });
      gsap.set(descRef.current, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.9 })
            .to(
              leftGridRef.current?.children ?? [],
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
              '-=0.5'
            )
            .to(
              rightGridRef.current?.children ?? [],
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
              '-=0.4'
            )
            .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="min-h-screen bg-[#1a1a1a] text-white px-8 md:px-16 py-24">
      <div className="grid md:grid-cols-[1fr_40%_1fr] gap-8 items-start">
        {/* Left column */}
        <div>
          <h2
            ref={headingRef}
            className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            Our Work
          </h2>
          <div ref={leftGridRef} className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10 rounded-sm" />
            ))}
          </div>
        </div>

        {/* Center gap */}
        <div />

        {/* Right column */}
        <div className="md:pt-24">
          <div ref={rightGridRef} className="grid grid-cols-2 gap-3 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/10 rounded-sm" />
            ))}
          </div>
          <p
            ref={descRef}
            className="font-[family-name:var(--font-cinzel)] text-base leading-relaxed text-white/50"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
            diam eget risus varius blandit sit amet non magna.
          </p>
        </div>
      </div>
    </section>
  );
}
