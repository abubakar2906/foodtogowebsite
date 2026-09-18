"use client";
import "../../components/Rider/HeroRider.css"; // Import the CSS file for styling

// Import your rider background image asset here
const riderBg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595115/RiderWallPaper.png"; // Replace with your actual path

export default function HeroRider() {
  return (
    <section
      className="hr-hero-container"
      style={{ backgroundImage: `url(${riderBg})` }}
    >
      {/* DARK GRADIENT OVERLAY FOR TEXT READABILITY */}
      <div className="hr-overlay"></div>

      {/* HERO CONTENT CENTER STACK */}
      <div className="hr-content-box">
        <h1 className="hr-main-title">How Can We Help?</h1>
      </div>
    </section>
  );
}
