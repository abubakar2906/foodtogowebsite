"use client";
import { useState } from "react";
import "./FoodDelivery.css";
const girl = "/assets/girl.png";
const SplashIcon = "/assets/SplashIcon.png";
const MascotIcon = "/assets/MascotIcon.png";

// const SplashIcon = () => (
//   <svg
//     viewBox="0 0 120 100"
//     xmlns="http://www.w3.org/2000/svg"
//     className="svg-full"
//   >
//     <g fill="#F5A623">
//       <ellipse cx="60" cy="50" rx="18" ry="22" />
//       <ellipse cx="60" cy="50" rx="22" ry="18" />
//       <ellipse cx="30" cy="28" rx="10" ry="14" transform="rotate(-30 30 28)" />
//       <ellipse cx="90" cy="28" rx="10" ry="14" transform="rotate(30 90 28)" />
//       <ellipse cx="20" cy="58" rx="9" ry="13" transform="rotate(-50 20 58)" />
//       <ellipse cx="100" cy="58" rx="9" ry="13" transform="rotate(50 100 58)" />
//       <ellipse cx="38" cy="82" rx="8" ry="12" transform="rotate(-15 38 82)" />
//       <ellipse cx="82" cy="82" rx="8" ry="12" transform="rotate(15 82 82)" />
//       <ellipse cx="60" cy="18" rx="7" ry="11" />
//       <circle cx="14" cy="40" r="6" />
//       <circle cx="106" cy="40" r="6" />
//       <circle cx="60" cy="88" r="5" />
//     </g>
//   </svg>
// );

// const MascotIcon = () => (
//   <svg
//     viewBox="0 0 80 100"
//     xmlns="http://www.w3.org/2000/svg"
//     className="svg-full"
//   >
//     <circle cx="40" cy="28" r="22" fill="#2D6A4F" />
//     <circle cx="33" cy="25" r="4" fill="white" />
//     <circle cx="47" cy="25" r="4" fill="white" />
//     <circle cx="34" cy="26" r="2" fill="#1B4332" />
//     <circle cx="48" cy="26" r="2" fill="#1B4332" />
//     <ellipse cx="40" cy="34" rx="6" ry="3" fill="#1B4332" opacity="0.4" />
//     <path
//       d="M34 34 Q40 40 46 34"
//       stroke="#1B4332"
//       strokeWidth="1.5"
//       fill="none"
//       strokeLinecap="round"
//     />
//     <rect x="18" y="48" width="44" height="32" rx="10" fill="#2D6A4F" />
//     <rect
//       x="26"
//       y="58"
//       width="28"
//       height="16"
//       rx="4"
//       fill="white"
//       opacity="0.9"
//     />
//     <line
//       x1="30"
//       y1="63"
//       x2="46"
//       y2="63"
//       stroke="#2D6A4F"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//     <line
//       x1="30"
//       y1="67"
//       x2="42"
//       y2="67"
//       stroke="#2D6A4F"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//     <line
//       x1="30"
//       y1="71"
//       x2="44"
//       y2="71"
//       stroke="#2D6A4F"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//     <line
//       x1="10"
//       y1="52"
//       x2="20"
//       y2="62"
//       stroke="#2D6A4F"
//       strokeWidth="6"
//       strokeLinecap="round"
//     />
//     <line
//       x1="70"
//       y1="52"
//       x2="60"
//       y2="62"
//       stroke="#2D6A4F"
//       strokeWidth="6"
//       strokeLinecap="round"
//     />
//     <line
//       x1="28"
//       y1="80"
//       x2="24"
//       y2="98"
//       stroke="#2D6A4F"
//       strokeWidth="6"
//       strokeLinecap="round"
//     />
//     <line
//       x1="52"
//       y1="80"
//       x2="56"
//       y2="98"
//       stroke="#2D6A4F"
//       strokeWidth="6"
//       strokeLinecap="round"
//     />
//   </svg>
// );

export default function FoodDeliveryHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero-contain">
      <div className="hero-content">
        {/* LEFT — image block */}
        <div className="image-wrapper">
          <div className="splash-container">
            <img src={SplashIcon} alt="Splash" className="splash-icon" />
            {/* <SplashIcon /> */}
          </div>

          <div className="green-accent-box" />

          <div className="photo-container">
            {!imgError ? (
              <img
                src={girl}
                alt="Woman enjoying food"
                onError={() => setImgError(true)}
                className="hero-image"
              />
            ) : (
              <div className="image-placeholder">
                Place your girl image here
              </div>
            )}
          </div>

          <div className="mascot-container">
            {/* <MascotIcon /> */}
            <img src={MascotIcon} alt="Mascot" className="mascot-icon" />
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="text-wrapper">
          <h1 className="hero-title">
            The Future of Food Delivery Starts Here
          </h1>
          <p className="hero-description">
            We're building more than just a food delivery platform, we're
            creating a faster, smarter, and more connected way for people to
            experience food every day. From your favorite local spots to the
            restaurants you've yet to discover, our mission is to bring great
            meals closer to everyone with seamless ordering, reliable delivery,
            and technology designed around convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
