"use client";

import Image from "next/image";
import { useState } from "react";

const CATEGORIES = ["BBQ & Grills", "Healthy", "Fast Food", "Others"];

const DEALS = [
  {
    img: "/deal-burgers.png",
    overline: "Restour",
    title: "Fast Fries & Burgers",
    badge: "-40%",
  },
  {
    img: "/deal-cakes.png",
    overline: "Restour",
    title: "Cakes & Cafe",
    badge: "-20%",
  },
  {
    img: "/deal-mediterranean.png",
    overline: "Restour",
    title: "Computer Bot Food",
    badge: "-20%",
  },
];

export default function DealsSection() {
  const [active, setActive] = useState("Fast Food");

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
      {/* Header row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="max-w-xs font-heading text-2xl font-bold leading-tight text-ink sm:text-[28px]">
          Up to -20% <span className="align-middle">🍔</span> FoodtoGo exclusive deals
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "border border-orange text-orange"
                  : "text-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards carousel */}
      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-4 pb-2">
        {DEALS.map((deal) => (
          <article
            key={deal.title}
            className="group relative aspect-[446/257] w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[calc((100%-2.5rem)/3)]"
          >
            <Image
              src={deal.img}
              alt={deal.title}
              fill
              sizes="(max-width: 640px) 85vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* discount badge */}
            <span className="absolute right-3 top-3 rounded-lg bg-black/75 px-2.5 py-1 text-xs font-semibold text-white">
              {deal.badge}
            </span>

            {/* label */}
            <div className="absolute bottom-3 left-4 text-white">
              <p className="text-[11px] font-medium text-white/80">{deal.overline}</p>
              <p className="font-heading text-lg font-semibold leading-tight">{deal.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
