"use client";
import "./OurStoryOffer.css";

// --- IMAGE IMPORTS ---
// Replace these paths with your actual local file paths
const storyMainImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594616/storyMainImg.png"; //
const eatTextImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594940/eatTextImg.png"; // "EAT! EAT!" graphic
const lettuceImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595205/lettuceImg.png";
const mascotCharacter = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595128/mascotCharacter.png"; // Delivery character mascot
const verifiedBadgeImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595025/Verified.png"; // Verified badge icon

const offerMainImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594818/offerMainImg.png"; // Hand holding paper bag
const fallingChipsImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594798/fallingChipsImg.png"; // Floating fries/chips

export default function OurStoryOffer() {
  fallingChipsImg;
  const offers = [
    "Fast & Reliable Delivery",
    "Wide Restaurant Selection",
    "Real-Time Order Tracking",
    "Support for Local Businesses",
  ];

  return (
    <div className="story-offer-container">
      {/* ================= SECTION 1: OUR STORY ================= */}
      <section className="story-row">
        {/* Left Column: Text Content */}
        <div className="story-text-block">
          <h2 className="section-title">Our Story</h2>
          <p className="story-paragraph">
            FoodToGo was born from a simple idea: everyone deserves access to
            delicious, quality meals without the hassle of cooking or leaving
            home. Founded in 2024, we started as a small team with a big dream.
          </p>
          <p className="story-paragraph">
            Our founder, Wisdom ****, noticed the challenges faced by both
            restaurant owners looking to expand their reach and busy
            professionals craving convenient meal options. He envisioned a
            platform that would bridge this gap.
          </p>
        </div>

        {/* Right Column: Composite Image Stack */}
        <div className="story-image-block">
          <div className="image-composition-wrapper">
            {/* Main Rounded Image */}
            <img
              src={storyMainImg}
              alt="Man holding a crispy chicken burger"
              className="main-story-img"
            />

            {/* Floating Overlay Assets */}
            <img
              src={eatTextImg}
              alt="Eat text"
              className="overlay-asset eat-text-1"
            />
            <img
              src={eatTextImg}
              alt="Eat text"
              className="overlay-asset eat-text-2"
            />
            <img
              src={lettuceImg}
              alt="Lettuce splash"
              className="overlay-asset lettuce-leaf"
            />
            <img
              src={mascotCharacter}
              alt="Delivery character mascot"
              className="overlay-asset story-mascot"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHAT WE OFFER YOU ================= */}
      {/* Right Column: Features List */}
      <section className="offer-row">
        <div className="offer-text-block">
          <h2 className="section-title">What We Offer You</h2>

          <ul className="offer-list">
            {offers.map((text, idx) => (
              <li key={idx} className="offer-list-item">
                {/* Custom CSS Checkmark Icon */}
                <div className="checkmark-icon">
                  <img src={verifiedBadgeImg} alt="" srcSet="" />

                  {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg> */}
                </div>
                <span className="offer-item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left Column: Image Stack with Floating Chips */}
        <div className="offer-image-block">
          <div className="image-composition-wrapper">
            {/* Floating Chips Asset on the left margin */}
            <img
              src={fallingChipsImg}
              alt="Floating french fries"
              className="overlay-asset floating-chips"
            />

            {/* Main Delivery Bag Image */}
            <img
              src={offerMainImg}
              alt="Hands delivering FoodToGo bag"
              className="main-offer-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
