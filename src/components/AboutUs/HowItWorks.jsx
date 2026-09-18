"use client";
import "./HowItWorks.css";

// Import your assets here
const card1FoodImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595024/pastaImage.png"; // Replace with your food image path
const card3PinImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595190/clipImage.png"; // Replace with your paperclip/pin image path
const rightHeroImg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594748/bowlImage.png"; // Replace with your large right-side food image

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      {/* ── HEADER SECTION ── */}
      <div className="hiw-header">
        <h1 className="hiw-title-bg">HOW IT WORKS?</h1>
        <p className="hiw-title-fg">Three Simple Steps</p>
      </div>

      {/* ── GRID CONTENT ── */}
      <div className="hiw-grid">
        {/* COLUMN 1: Card 1 (Large Card) */}
        <div className="hiw-col-left">
          <div className="hiw-card hiw-card--large">
            <div className="hiw-card-content">
              <span className="hiw-step-num">1.</span>
              <h2 className="hiw-step-title h2-white">Choose Your Meal</h2>
              <p className="hiw-step-desc">
                Browse our menu and select from a variety of delicious dishes.
              </p>
            </div>
            <div className="hiw-card-img-wrapper">
              <img
                src={card1FoodImg}
                alt="Delicious Pasta"
                className="hiw-card-food-img"
              />
            </div>
            {/* Folded Corner Effect */}
            <div className="hiw-fold"></div>
          </div>
        </div>

        {/* COLUMN 2: Card 2 & Card 3 (Stacked Stack) */}
        <div className="hiw-col-middle">
          {/* Card 2 */}
          <div className="hiw-card hiw-card--small">
            <div className="hiw-card-content">
              <h2 className="hiw-step-title">
                <span className="hiw-step-num-inline">2.</span> Fast Delivery
              </h2>
              <p className="hiw-step-desc">
                Our rider picks up your order and delivers it hot and fresh
              </p>
            </div>
            <div className="hiw-fold"></div>
          </div>

          {/* Card 3 */}
          <div className="hiw-card hiw-card--small hiw-card--pinned">
            {/* Floating Paperclip Icon */}
            <img
              src={card3PinImg}
              alt="Pin Decoration"
              className="hiw-pin-icon"
            />

            <div className="hiw-card-content">
              <h2 className="hiw-step-title h2-white">
                <span className="hiw-step-num-inline ">3.</span> Enjoy Fresh
                Food
              </h2>
              <p className="hiw-step-desc">
                Receive your meal, dig in, and enjoy fresh and tasty meal
              </p>
            </div>
            <div className="hiw-fold"></div>
          </div>
        </div>

        {/* COLUMN 3: Large Showcase Image */}
        <div className="hiw-col-right">
          <div className="hiw-hero-wrapper">
            <img
              src={rightHeroImg}
              alt="FoodtoGo Meal"
              className="hiw-hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
