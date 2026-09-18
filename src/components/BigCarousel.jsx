"use client";
import { useState, useEffect, useRef } from "react";
import "./BigCarousel.css";

const bigCarousel1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594992/bigCarousel1.png";
const bigCarousel2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594881/bigCarousel2.png";

// ── 1. INCREASE TIMING HERE (e.g. 7000ms = 7 seconds) ──
const PAUSE_DURATION = 7000;
const TRANSITION_MS = 750;

const cards = [
  {
    id: "partner",
    variant: "dark",
    badge: "Earn more with lower fees",
    eyebrow: "Signup as a business",
    title: "Partner with us",
    cta: "Get Started",
    image: bigCarousel1,
    alt: "Chef holding a rolling pin",
  },
  {
    id: "rider",
    variant: "yellow",
    badge: "FoodtoGo exclusive perks",
    eyebrow: "Signup as a rider",
    title: "Ride with us",
    cta: "Get Started",
    image: bigCarousel2,
    alt: "Delivery rider on scooter",
  },
];

function PromoCard({ card }) {
  return (
    <div className={`promo-card promo-card--${card.variant}`}>
      <img
        className="card-bg"
        src={card.image}
        alt={card.alt}
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=85";
        }}
      />
      <div className="card-overlay" />
      <span className="card-badge">{card.badge}</span>
      <div className="card-content">
        <p className="card-eyebrow">{card.eyebrow}</p>
        <h2 className="card-title">{card.title}</h2>
        <button className="card-btn">{card.cta}</button>
      </div>
    </div>
  );
}

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Refs to avoid stale closures
  const currentRef = useRef(0);
  const slidingRef = useRef(false);
  const timerRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // ── 2. HOVER REFS TO PAUSE TIME CLEANLY ──
  const isHoveredRef = useRef(false);
  const elapsedRef = useRef(0); // Tracks progress made before pausing

  const total = cards.length;

  function startProgress(offsetTime = 0) {
    cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now() - offsetTime;

    const tick = (now) => {
      if (isHoveredRef.current) return; // Freeze progress animation if hovered

      const elapsed = now - startRef.current;
      elapsedRef.current = elapsed;

      const pct = Math.min((elapsed / PAUSE_DURATION) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }

  function startCycle(remainingTime = PAUSE_DURATION) {
    clearTimeout(timerRef.current);

    // Calculate how much time had passed before pausing
    const offsetTime = PAUSE_DURATION - remainingTime;
    startProgress(offsetTime);

    timerRef.current = setTimeout(() => {
      if (slidingRef.current) return;
      slidingRef.current = true;

      const next = (currentRef.current + 1) % total;
      currentRef.current = next;
      setCurrent(next);

      setTimeout(() => {
        slidingRef.current = false;
        elapsedRef.current = 0;
        startCycle(PAUSE_DURATION); // Reset full duration on slide change
      }, TRANSITION_MS);
    }, remainingTime);
  }

  // ── HOVER HANDLERS ──
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    clearTimeout(timerRef.current);
    cancelAnimationFrame(rafRef.current);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    // Calculate remaining time for the current slide
    const remainingTime = Math.max(0, PAUSE_DURATION - elapsedRef.current);
    startCycle(remainingTime);
  };

  // Boot once on mount
  useEffect(() => {
    startCycle(PAUSE_DURATION);
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Manual dot click
  function goTo(index) {
    if (slidingRef.current || index === currentRef.current) return;
    slidingRef.current = true;
    clearTimeout(timerRef.current);
    cancelAnimationFrame(rafRef.current);

    currentRef.current = index;
    setCurrent(index);

    setTimeout(() => {
      slidingRef.current = false;
      elapsedRef.current = 0;
      if (!isHoveredRef.current) {
        startCycle(PAUSE_DURATION);
      }
    }, TRANSITION_MS);
  }

  return (
    <section className="big-carousel-section">
      {/* Attached Mouse Over / Leave events to pause on hover */}
      <div
        className="carousel-track-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(calc(-${current} * 50%))` }}
        >
          {cards.map((card) => (
            <PromoCard key={card.id} card={card} />
          ))}
        </div>

        <div className="card-dots">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`card-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-progress">
          <div
            className="carousel-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
