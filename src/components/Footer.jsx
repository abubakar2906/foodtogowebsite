"use client";
import "./Footer.css";
// Replace this path with the actual path to your local background image
const footerBg = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594818/footer.png";
const footerLogo = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594923/footer-logo.png";
import { Link, NavLink } from "./RouterShims";

export default function Footer() {
  return (
    <footer
      className="footer-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${footerBg})`,
      }}
    >
      <div className="footer-content">
        {/* COLUMN 1: Brand & Socials */}
        <div className="footer-column brand-column">
          <div className="footer-logo">
            {/* Simple representation of your logo mark */}
            <Link to="/" className="title">
              <img src={footerLogo} alt="ThinkPath Logo" />
            </Link>
          </div>

          <p className="brand-description">
            The fastest way to get your favorite Nigerian meals delivered hot
            and fresh.
          </p>

          <div className="social-icons">
            {/* ticktok */}
            <a
              href="https://www.tiktok.com/@foodtogoltd?_r=1&_t=ZS-961f0waWlWL"
              className="social-link"
              aria-label="Tiktok"
              target="_blank"
            >
              <svg
                fill="#fff"
                viewBox="0 0 14 14"
                role="img"
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m 4.9520184,12.936803 c -1.12784,-0.2039 -2.19411,-0.9875 -2.66789,-1.9606 -0.32895,-0.6757 -0.45541,-1.3901003 -0.37418,-2.1137003 0.15054,-1.3412 0.84482,-2.4395 1.92406,-3.0439 0.56899,-0.3186 1.38421,-0.4769 1.991,-0.3867 l 0.35091,0.052 9e-5,1.0725 9e-5,1.0725 -0.332,-0.014 c -0.79998,-0.033 -1.39595,0.3096 -1.70379,0.9784 -0.1473,0.32 -0.18461,0.8887 -0.081,1.2351 0.12773,0.4273003 0.50542,0.8132003 0.96145,0.9825003 0.15535,0.058 0.32344,0.08 0.61152,0.079 0.35862,-4e-4 0.42448,-0.013 0.67663,-0.1323 0.36505,-0.1726 0.63141,-0.4231 0.78797,-0.7411 0.10147,-0.2061003 0.13414,-0.3430003 0.16587,-0.6951003 0.0217,-0.2412 0.0401,-2.2122 0.0409,-4.38 l 10e-4,-3.94149998 0.68371,0 c 0.37605,0 0.8277,0.012 1.00368,0.027 l 0.31995,0.027 0,0.1584 c 0,0.3813 0.22299,1.1127 0.45156,1.4812 0.0571,0.092 0.2564996,0.3178 0.4431796,0.5018 0.36068,0.3555 0.66494,0.5352 1.13352,0.6692 0.138,0.04 0.28359,0.089 0.32353,0.109 0.0399,0.02 0.11522,0.038 0.16728,0.038 0.0521,4e-4 0.13701,0.012 0.18876,0.026 l 0.0941,0.025 0,0.9948 0,0.9948 -0.17773,-0.019 c -0.9611,-0.1037 -1.72925,-0.3601 -2.3423096,-0.782 -0.30468,-0.2096 -0.33102,-0.222 -0.30218,-0.1422 0.0104,0.029 0.003,1.1249 -0.0164,2.436 -0.0336,2.2728 -0.0396,2.3992 -0.12781,2.7173003 -0.33904,1.2222 -1.09994,2.1297 -2.10183,2.5068 -0.6126,0.2306 -1.39679,0.2932 -2.09405,0.1671 z"></path>
                </g>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/foodtogoltd"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://x.com/FoodToGoltd"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#youtube"
              className="social-link"
              aria-label="YouTube"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMN 2: Company */}
        <div className="footer-column links-column">
          <h3 className="column-title">Company</h3>
          <ul className="links-list">
            <li>
              <Link to="/about" className="title">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/rider" className="title">
                Rider
              </Link>
            </li>
            <li>
              <Link to="/vendor" className="title">
                Vendor
              </Link>
            </li>
            <li>
              <Link to="/support" className="title">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: Support */}
        <div className="footer-column links-column">
          <h3 className="column-title">Support</h3>
          <ul className="links-list">
            <li>
              {/* <a href="#privacy">Privacy Policy</a>  */}
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/Terms">Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: Newsletter */}
        <div className="footer-column newsletter-column">
          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-subtitle">
            Get the latest offers and food news
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
