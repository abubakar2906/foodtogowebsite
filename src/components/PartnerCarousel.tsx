"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    img: "/partner-chef.png",
    pill: "Earn more with lower fees",
    overline: "Signup as a business",
    title: "Partner with us",
    href: "/vendor",
    focus: "object-center",
  },
  {
    img: "/rider.png",
    pill: "FoodtoGo exclusive perks",
    overline: "Signup as a rider",
    title: "Ride with us",
    href: "/rider",
    focus: "object-center",
  },
];

export default function PartnerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      children.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cCenter - center);
        if (d < min) {
          min = d;
          closest = i;
        }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1"
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.title}
            className="relative h-[260px] w-[92%] shrink-0 snap-center overflow-hidden rounded-2xl sm:h-[320px] sm:w-[94%]"
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              sizes="(max-width: 640px) 92vw, 94vw"
              className={`object-cover ${slide.focus}`}
            />
            {/* left-to-right dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* top pill */}
            <span className="absolute left-6 top-6 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
              {slide.pill}
            </span>

            {/* content */}
            <div className="absolute bottom-7 left-6 sm:bottom-9 sm:left-9">
              <p className="font-heading text-lg font-semibold text-orange sm:text-xl">
                {slide.overline}
              </p>
              <h3 className="mt-1 font-heading text-3xl font-bold text-white sm:text-4xl">
                {slide.title}
              </h3>
              <Link
                href={slide.href}
                className="mt-4 inline-flex rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
              >
                Get Started
              </Link>
            </div>

            {/* dots */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    active === i ? "w-5 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
