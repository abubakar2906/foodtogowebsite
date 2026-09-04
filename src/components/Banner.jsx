"use client";
import "./Banner.css";
const phone1 = "/assets/phone1.png";

const GooglePlayIcon = () => (
  <svg
    className="store-btn-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00C3FF" />
        <stop offset="100%" stopColor="#1DE9B6" />
      </linearGradient>
      <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD740" />
        <stop offset="100%" stopColor="#FF6D00" />
      </linearGradient>
      <linearGradient id="gp3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF3D4A" />
        <stop offset="100%" stopColor="#C6175A" />
      </linearGradient>
      <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E676" />
        <stop offset="100%" stopColor="#00796B" />
      </linearGradient>
    </defs>
    <path
      d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z"
      fill="url(#gp4)"
    />
    <path
      d="M3 3.5l8.5 8.5-8.5 8.5c-.5-.33-.5-1-.5-1v-15s0-.67.5-1z"
      fill="url(#gp1)"
    />
    <path d="M11.5 12l7 7-15-8.5 8-4.5 0 6z" fill="url(#gp2)" opacity="0.9" />
    <path d="M11.5 12l-8-8.5 15 8.5-7 4z" fill="url(#gp3)" opacity="0.9" />
  </svg>
);

const AppleIcon = () => (
  <svg
    className="store-btn-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="#111"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const FoodDoodle = () => (
  <svg
    className="banner-doodle"
    viewBox="0 0 900 300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
  >
    {/* burger */}
    <ellipse cx="80" cy="80" rx="34" ry="12" />
    <rect x="46" y="80" width="68" height="14" rx="3" />
    <ellipse cx="80" cy="94" rx="34" ry="12" />
    {/* pizza slice */}
    <polygon points="200,40 175,110 225,110" />
    <line x1="187" y1="75" x2="213" y2="75" />
    <circle cx="200" cy="65" r="3" fill="white" />
    {/* cup */}
    <path d="M320 50 L310 120 L370 120 L360 50 Z" />
    <line x1="310" y1="70" x2="370" y2="70" />
    <path d="M355 60 Q380 60 380 75 Q380 90 355 90" />
    {/* avocado */}
    <ellipse cx="470" cy="140" rx="20" ry="28" />
    <ellipse cx="470" cy="148" rx="10" ry="15" />
    <circle cx="470" cy="152" r="5" fill="white" />
    {/* hot dog */}
    <rect x="550" y="200" width="80" height="20" rx="10" />
    <ellipse cx="590" cy="205" rx="30" ry="8" />
    {/* leaf */}
    <path d="M700 60 Q730 40 760 60 Q730 80 700 60 Z" />
    <line x1="730" y1="60" x2="730" y2="90" />
    {/* noodle bowl */}
    <ellipse cx="820" cy="220" rx="40" ry="12" />
    <path d="M780 220 Q780 250 820 255 Q860 250 860 220" />
    <path d="M795 210 Q805 195 815 210 Q825 195 835 210" />
    {/* salt shaker */}
    <rect x="120" y="190" width="24" height="40" rx="6" />
    <ellipse cx="132" cy="190" rx="12" ry="5" />
    <circle cx="128" cy="200" r="2" fill="white" />
    <circle cx="136" cy="208" r="2" fill="white" />
    <circle cx="128" cy="214" r="2" fill="white" />
    {/* star deco */}
    <path d="M630 80 L633 90 L643 90 L635 96 L638 106 L630 100 L622 106 L625 96 L617 90 L627 90 Z" />
    <path d="M430 230 L432 238 L440 238 L433 243 L436 251 L430 246 L424 251 L427 243 L420 238 L428 238 Z" />
  </svg>
);

export default function HeroBanner() {
  return (
    <div className="banner">
      {/* Background food doodles */}
      <FoodDoodle />

      {/* LEFT — copy */}
      <div className="banner-copy">
        <h1 className="banner-headline">
          <span className="accent">Savor</span> Tasty
          <br />
          Meals at Home
        </h1>

        <p className="banner-subhead">
          From the best local kitchens to your door in minutes.
        </p>

        <p className="banner-body">
          Quick delivery for your busy life, offering thousands of diverse,
          delicious options.
        </p>

        <div className="store-buttons">
          <a href="#" className="store-btn">
            <GooglePlayIcon />
            <span className="store-btn-text">
              <span className="store-btn-label">Available on</span>
              <span className="store-btn-name">Google Play</span>
            </span>
          </a>

          <a href="#" className="store-btn">
            <AppleIcon />
            <span className="store-btn-text">
              <span className="store-btn-label">Get it on</span>
              <span className="store-btn-name">App Store</span>
            </span>
          </a>
        </div>
      </div>

      {/* RIGHT — phone */}
      <div className="banner-phone">
        <img
          className="phone-img"
          src={phone1}
          alt="App on iPhone"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=85";
          }}
        />
      </div>
    </div>
  );
}
