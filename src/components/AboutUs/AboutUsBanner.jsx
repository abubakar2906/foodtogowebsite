"use client";
import "./AboutUsBanner.css";
// Replace this path with the actual path to your local background video file
const aboutVideo = "https://res.cloudinary.com/ddzackjqq/video/upload/v1789595471/Foodtogo_video_1.mp4";

export default function AboutUsBanner() {
  // Repeating the text keys to ensure the endless marquee marquee effect fills out large laptop monitors
  const marqueeItems = [
    "Best Meals",
    "Delivered Fast",
    "Pocket Friendly",
    "Best Meals",
    "Delivered Fast",
    "Pocket Friendly",
  ];

  return (
    <section className="about-banner-section">
      {/* 1. BACKGROUND VIDEO CONTAINER */}
      <div className="video-background-wrapper">
        <video
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video-element"
        />
        {/* Subtle dark overlay matrix matching the screen design mockup gradient tint */}
        <div className="video-dark-overlay" />
      </div>

      {/* 2. FOREGROUND CORE CONTENT */}
      <div className="about-banner-content">
        <h1 className="about-main-title">About Us</h1>
      </div>

      {/* 3. INFINITE TICKER MARQUEE CAROUSEL */}
      <div className="ticker-marquee-container">
        <div className="ticker-moving-track">
          {/* First loop track instance */}
          <div className="ticker-data-group">
            {marqueeItems.map((item, idx) => (
              <span key={`group-1-${idx}`} className="ticker-item">
                *{item}
              </span>
            ))}
          </div>
          {/* Second cloned loop track instance to create seamless endless iteration illusion */}
          <div className="ticker-data-group" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`group-2-${idx}`} className="ticker-item">
                *{item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
