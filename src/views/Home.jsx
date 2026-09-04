"use client";
import "./Home.css";

const phoneImage = "/assets/phone-1.png";

import Carousel from "../components/Carousel";
import FoodDelivery from "../components/FoodDelivery";
import Banner from "../components/Banner";
import BigCarousel from "../components/BigCarousel";
import OrderTrackerWraper from "../components/OrderTrackerWraper";

export const Home = () => {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-container">
          {/* Left */}
          <div className="hero-left">
            <h1>
              Hot meals.
              <br />
              <span className="highlight">Live tracking.</span>
              <br />
              Delivered fast.
            </h1>
            <p className="description">
              Order from your favorite restaurants and track your rider in real
              time from pickup to your doorstep.
            </p>
            <button className="cta-button">
              Order Now
              <svg
                className="cta-icon"
                width="14"
                height="14"
                viewBox="-19.04 0 75.804 75.804"
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                stroke=""
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g
                    id="Group_65"
                    data-name="Group 65"
                    transform="translate(-831.568 -384.448)"
                  >
                    {" "}
                    <path
                      id="Path_57"
                      data-name="Path 57"
                      d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>

            <div className="stats">
              <div className="stat">
                <div>
                  <svg
                    className="pd light-orange"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6.08913 13.2799H9.17913V20.4799C9.17913 22.1599 10.0891 22.4999 11.1991 21.2399L18.7691 12.6399C19.6991 11.5899 19.3091 10.7199 17.8991 10.7199H14.8091V3.5199C14.8091 1.8399 13.8991 1.4999 12.7891 2.7599L5.21913 11.3599C4.29913 12.4199 4.68913 13.2799 6.08913 13.2799Z"
                        stroke="#ff6600"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  25 mins <br />
                  <small>Average delivery</small>
                </div>
              </div>
              <div className="stat">
                <svg
                  className="cta-icon-location pd light-green"
                  width="27"
                  height="27"
                  viewBox="0 0 29 32"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 32"
                  enableBackground="new 0 0 29 32"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#026342"
                        d="M1.045,27.731l13.303,4.245C14.397,31.992,14.449,32,14.5,32c0.053,0,0.106-0.009,0.157-0.025l13.312-4.407 C28.595,27.36,29,26.803,29,26.145s-0.404-1.218-1.03-1.425l-7.733-2.56c-0.264-0.09-0.545,0.056-0.632,0.317 c-0.087,0.263,0.055,0.545,0.317,0.632l7.733,2.56C27.975,25.775,28,26.06,28,26.145c0,0.084-0.025,0.368-0.344,0.474 l-13.159,4.356L1.35,26.778C1.029,26.676,1.001,26.392,1,26.307c-0.001-0.084,0.021-0.368,0.339-0.478l8.028-2.753 c0.261-0.089,0.4-0.374,0.311-0.635c-0.09-0.262-0.375-0.401-0.635-0.311l-8.028,2.753C0.392,25.097-0.007,25.659,0,26.317 S0.417,27.53,1.045,27.731z"
                      ></path>{" "}
                      <path
                        fill="#026342"
                        d="M15.679,0.063C9.81-0.595,4.817,3.982,4.817,9.705c0,2.24,0.729,4.23,2.355,6.442l6.31,9.121 c0.249,0.359,0.658,0.574,1.096,0.574h0c0.441,0,0.853-0.218,1.098-0.577l4.173-5.993l2.344-3.568 c1.655-2.094,2.361-4.718,1.988-7.388C23.581,4.022,20.005,0.551,15.679,0.063z M21.382,15.12l-2.362,3.592l-4.168,5.986 c-0.089,0.13-0.222,0.145-0.274,0.145s-0.185-0.014-0.274-0.143l-6.318-9.133c-1.5-2.041-2.169-3.85-2.169-5.862 C5.817,4.905,9.734,1,14.548,1c0.335,0,0.675,0.019,1.018,0.058c3.88,0.437,7.086,3.548,7.624,7.397 C23.525,10.852,22.892,13.206,21.382,15.12z"
                      ></path>{" "}
                      <path
                        fill="#026342"
                        d="M14.497,4.705c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S17.253,4.705,14.497,4.705z M14.497,13.705 c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S16.702,13.705,14.497,13.705z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div>
                  Live tracking
                  <br />
                  <small>Real-time updates</small>
                </div>
              </div>
              <div className="stat">
                <div>
                  <svg
                    className="pd light-orange"
                    width="27"
                    height={27}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M14 21.0001V15.0001H10V21.0001M19 9.77818V16.2001C19 17.8802 19 18.7203 18.673 19.362C18.3854 19.9265 17.9265 20.3855 17.362 20.6731C16.7202 21.0001 15.8802 21.0001 14.2 21.0001H9.8C8.11984 21.0001 7.27976 21.0001 6.63803 20.6731C6.07354 20.3855 5.6146 19.9265 5.32698 19.362C5 18.7203 5 17.8802 5 16.2001V9.77753M21 12.0001L15.5668 5.96405C14.3311 4.59129 13.7133 3.9049 12.9856 3.65151C12.3466 3.42894 11.651 3.42899 11.0119 3.65165C10.2843 3.90516 9.66661 4.59163 8.43114 5.96458L3 12.0001"
                        stroke="#ff6600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  500+
                  <br />
                  <small>Restaurants</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hero-right">
            <div className="map-container">
              {/* <img src={mapImage} alt="Delivery Map" className="map-image" /> */}
            </div>
            <div className="phone-mockup">
              <img src={phoneImage} alt="Track Order" className="phone-image" />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h2>How it works</h2>
          <div className="steps">
            {/* Step 1 */}
            <div className="step">
              <div className="lg-pd light-green">
                <svg
                  width={50}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z"
                      stroke="#026342 "
                      strokeWidth="1.5"
                    ></path>{" "}
                    <circle
                      opacity="0.5"
                      cx="15"
                      cy="9"
                      r="1"
                      fill="#026342 "
                    ></circle>{" "}
                    <circle
                      opacity="0.5"
                      cx="9"
                      cy="9"
                      r="1"
                      fill="#026342 "
                    ></circle>{" "}
                    <path
                      opacity="0.5"
                      d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                      stroke="#026342 "
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <span className="step-number">1.</span>
                <span className="step-title-n">Choose Your Meal</span>
                <p>Browse restaurants and order in seconds.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step">
              <div className="lg-pd light-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width={50}
                  // height={50}
                >
                  {/* <!-- Speed/Motion Lines --> */}
                  <path
                    d="M2 20 H6 M1 27 H5 M3 34 H7"
                    stroke="#ff6600"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* <!-- Delivery Box --> */}
                  <rect
                    x="9"
                    y="15"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="#ff6600"
                    strokeWidth="3"
                    fill="none"
                    strokeLinejoin="round"
                  />

                  {/* <!-- Box Details (Straps/Design) --> */}
                  <path
                    d="M17 15 V31"
                    stroke="#ff6600"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />

                  {/* <!-- Scooter Frame & Body --> */}
                  <path
                    d="M17 31 H25 L31 43 H43 L48 30"
                    stroke="#ff6600"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* <!-- Handlebars --> */}
                  <path
                    d="M48 30 L45 20 H39"
                    stroke="#ff6600"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* <!-- Seat --> */}
                  <path
                    d="M25 33 H33"
                    stroke="#ff6600"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* <!-- Front Wheel & Fork --> */}
                  <circle
                    cx="49"
                    cy="47"
                    r="7"
                    stroke="#ff6600"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M49 47 L46 24"
                    stroke="#ff6600"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* <!-- Rear Wheel & Mudguard --> */}
                  <circle
                    cx="17"
                    cy="47"
                    r="7"
                    stroke="#ff6600"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M10 44 A 7 7 0 0 1 24 44"
                    stroke="#ff6600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <span className="step-number">2.</span>
                <span className="step-title-n">Track Your Order</span>
                <p>Track your order in real-time.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step">
              <div className="lg-pd light-green">
                <svg
                  viewBox="0 0 24 24"
                  width={50}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M2 22H22"
                      stroke="#ff6600"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
                      stroke="#ff6600"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
                      stroke="#ff6600"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
                      stroke="#ff6600"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
                      stroke="#ff6600"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M19.0001 7L18.9701 4H14.5701"
                      stroke="#ff6600"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div>
                <span className="step-number">3.</span>
                <span className="step-title-n">Fast Doorstep Delivery</span>
                <p>Fresh meal delivered quickly and safely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Order Tracker ── */}
      <OrderTrackerWraper />

      {/* Carousel */}
      <section className="carousel-section">
        <Carousel />
      </section>

      {/* Food delivery */}
      <section className="food-delivery-section">
        <FoodDelivery />
      </section>

      {/* Banner */}
      <section className="banner-section">
        <Banner />
      </section>

      <section className="big-carousel-section">
        <BigCarousel />
      </section>

      {/* Footer */}
      <section className="footer-section">{/* <Footer /> */}</section>
    </div>
  );
};
