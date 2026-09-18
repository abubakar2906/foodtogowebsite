"use client";
import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
const restaurant1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594919/Restaurant1.png";
const restaurant2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594757/Restaurant2.png";
const restaurant3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594635/Restaurant3.png";
const restaurant4 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595206/Restaurant4.png";
const deal1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595027/deal1.jpg";
const deal2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594747/deal2.jpg";
const deal3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594667/deal3.jpg";
const deal4 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595199/deal4.jpg";

/* ── Deal cards data ── */
const dealCards = [
  {
    id: 1,
    image: deal1,
    imagePlaceholder: "🍔",
    bg: "#c0392b",
    discount: "-40%",
    category: "Restaurant",
    name: "Fast Fries & Burgers",
  },
  {
    id: 2,
    image: deal2,
    imagePlaceholder: "🍰",
    bg: "#c8a02a",
    discount: "-20%",
    category: "Restaurant",
    name: "Cakes & Cafe",
  },
  {
    id: 3,
    image: deal3,
    imagePlaceholder: "🌯",
    bg: "#2c7a4b",
    discount: "-15%",
    category: "Restaurant",
    name: "Computer Bot Food",
  },
  {
    id: 4,
    image: deal4,
    imagePlaceholder: "🍛",
    bg: "#8e44ad",
    discount: "-30%",
    category: "Restaurant",
    name: "Spice Garden",
  },
  {
    id: 5,
    image: null,
    imagePlaceholder: "🥩",
    bg: "#e67e22",
    discount: "-25%",
    category: "Restaurant",
    name: "The Grill House",
  },
  {
    id: 6,
    image: null,
    imagePlaceholder: "🍣",
    bg: "#16a085",
    discount: "-10%",
    category: "Restaurant",
    name: "Sushi Corner",
  },
];

/* ── Restaurant cards data ── */
const restaurantCards = [
  {
    id: 1,
    logo: restaurant1, // ← replace with: import baekLogo ... then: baekLogo
    logoBg: "#3d1a1a", // background of the logo box
    logoBgPlaceholder: "☕", // shown when logo is null
    name: "BAEK Coffee Shop",
    location: "Lagos",
    tag: "Coffee",
  },
  {
    id: 2,
    logo: restaurant2,
    logoBg: "#f5ede0",
    logoBgPlaceholder: "🍕",
    name: "Pizza House",
    location: "Lagos",
    tag: "Pizza",
  },
  {
    id: 3,
    logo: restaurant3,
    logoBg: "#e8f0e4",
    logoBgPlaceholder: "🍕",
    name: "Good Days Pizza Co",
    location: "Lagos",
    tag: "Pizza",
  },
  {
    id: 4,
    logo: restaurant4,
    logoBg: "#e0f0f5",
    logoBgPlaceholder: "🐇",
    name: "Rabbito Melty",
    location: "Lagos",
    tag: "Burgers",
  },
  {
    id: 5,
    logo: null,
    logoBg: "#f0f5e0",
    logoBgPlaceholder: "🧁",
    name: "Bake Tales",
    location: "Lagos",
    tag: "Bakery",
  },
  {
    id: 6,
    logo: null,
    logoBg: "#fde8d8",
    logoBgPlaceholder: "🍲",
    name: "Mama's Kitchen",
    location: "Lagos",
    tag: "Local",
  },
  {
    id: 7,
    logo: null,
    logoBg: "#d8f5e8",
    logoBgPlaceholder: "🥗",
    name: "Green Bowl",
    location: "Lagos",
    tag: "Healthy",
  },
];

const categories = ["BBQ & Grills", "Healthy", "Fast Food", "Others"];

/* ── Auto-scroll hook ── */
function useAutoScroll(ref, speed = 0.5) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    let paused = false;
    const step = () => {
      if (!paused) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [ref, speed]);
}

/* ── Deal Card ──
   Image = full background behind the gradient + text overlay */
function DealCard({ card }) {
  return (
    <div className="deal-card" style={{ background: card.bg }}>
      {/* Background image — stretches to fill the entire card */}
      {card.image ? (
        <img src={card.image} alt={card.name} className="deal-card-img" />
      ) : (
        /* Emoji placeholder centred on card — remove once real image added */
        <div className="deal-card-placeholder">{card.imagePlaceholder}</div>
      )}

      {/* Discount badge — floats top-right above image */}
      <div className="deal-badge">{card.discount}</div>

      {/* Text sits at bottom over a dark gradient that dims the image */}
      <div className="deal-info">
        <span className="deal-category">{card.category}</span>
        <span className="deal-name">{card.name}</span>
      </div>
    </div>
  );
}

/* ── Restaurant Card ──
   Image fills & occupies the full top area of the card (full-bleed, no padding) */
function RestaurantCard({ card }) {
  return (
    <div className="resto-card">
      {/* Full-bleed image area — image fills edge-to-edge with no whitespace */}
      <div className="resto-logo" style={{ background: card.logoBg }}>
        {card.logo ? (
          /* object-fit: cover — fills the box and crops neatly */
          <img src={card.logo} alt={card.name} className="resto-logo-img" />
        ) : (
          /* Emoji placeholder centred — remove once real image added */
          <span className="resto-logo-placeholder">
            {card.logoBgPlaceholder}
          </span>
        )}
      </div>

      {/* Footer — name, location, category tag */}
      <div className="resto-footer">
        <span className="resto-name">{card.name}</span>
        <span className="resto-loc">{card.location}</span>
        <span className="resto-tag">{card.tag}</span>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function Carousel() {
  const [activeCategory, setActiveCategory] = useState("Fast Food");
  const dealRef = useRef(null);
  const restoRef = useRef(null);

  useAutoScroll(dealRef, 0.6);
  useAutoScroll(restoRef, 0.5);

  const dealLoop = [...dealCards, ...dealCards];
  const restoLoop = [...restaurantCards, ...restaurantCards];

  return (
    <div className="carousel-page">
      {/* ── Section 1: Deals ── */}
      <div className="section-header">
        <h2 className="section-title">
          Up to -20% 🛍️ <span>FoodtoGo exclusive deals</span>
        </h2>
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-tab ${activeCategory === cat ? "cat-tab-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="carousel-track-wrapper">
        <div className="carousel-track" ref={dealRef}>
          {dealLoop.map((card, i) => (
            <DealCard key={`${card.id}-${i}`} card={card} />
          ))}
        </div>
        <div className="fade-left" />
        <div className="fade-right" />
      </div>

      {/* ── Section 2: Popular Restaurants ── */}
      <div className="section-header" style={{ marginTop: 40 }}>
        <h2 className="section-title">Popular Restaurants</h2>
      </div>

      <div className="carousel-track-wrapper">
        <div className="carousel-track" ref={restoRef}>
          {restoLoop.map((card, i) => (
            <RestaurantCard key={`${card.id}-${i}`} card={card} />
          ))}
        </div>
        <div className="fade-left" />
        <div className="fade-right" />
      </div>
    </div>
  );
}
