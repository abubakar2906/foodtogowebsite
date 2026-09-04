"use client";
import React, { useState, useRef, useEffect } from "react";
import "./DeliverWithUs.css";

// ── ASSET IMPORTS ──
const dispatcherImg = "/assets/dispatcherImg.png"; // Replace with your actual path

// List of Nigerian States for the location selector
const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT (Abuja)",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const VEHICLE_TYPES = ["Car", "Motorcycle", "Bicycle"];

export default function DeliverWithUs() {
  const [city, setCity] = useState("");
  const [vehicle, setVehicle] = useState("");

  // UI Dropdown states
  const [showCityMenu, setShowCityMenu] = useState(false);
  const [showVehicleMenu, setShowVehicleMenu] = useState(false);

  const cityRef = useRef(null);
  const vehicleRef = useRef(null);

  // Close menus when clicking outside the selection targets
  useEffect(() => {
    function handleClickOutside(event) {
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setShowCityMenu(false);
      }
      if (vehicleRef.current && !vehicleRef.current.contains(event.target)) {
        setShowVehicleMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || !vehicle) {
      alert(
        "Please select both your location state and vehicle configuration.",
      );
      return;
    }
    console.log("Profile Data Submitted:", { city, vehicle });
  };

  return (
    <section className="dwu-main-section">
      <div className="dwu-layout-grid">
        {/* LEFT COLUMN: BRAND VALUE STATEMENT & GRAPHIC */}
        <div className="dwu-info-column">
          <h1 className="dwu-main-heading">Deliver with FoodToGo</h1>
          <p className="dwu-body-paragraph">
            Join FoodToGo as a Rider and earn money delivering meals to
            customers in your area. Enjoy flexible hours, easy order management,
            and the freedom to work on your own schedule.
          </p>
          <div className="dwu-image-frame">
            <img
              src={dispatcherImg}
              alt="FoodToGo Dispatcher holding delivery bag on motorcycle"
              className="dwu-dispatcher-img"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: REGISTRATION PROFILE CARD */}
        <div className="dwu-form-column">
          <div className="dwu-profile-card">
            <h2 className="dwu-card-title">Create your Profile</h2>

            <form onSubmit={handleSubmit} className="dwu-form-element">
              {/* NIGERIAN STATE SELECTOR FIELD */}
              <div className="dwu-dropdown-wrapper" ref={cityRef}>
                <div
                  className={`dwu-custom-select ${showCityMenu ? "is-open" : ""}`}
                  onClick={() => {
                    setShowCityMenu(!showCityMenu);
                    setShowVehicleMenu(false);
                  }}
                >
                  <span
                    className={city ? "dwu-val-selected" : "dwu-placeholder"}
                  >
                    {city ? `${city} State` : "Select your city"}
                  </span>
                  <svg
                    className="dwu-chevron-icon"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {showCityMenu && (
                  <ul className="dwu-dropdown-list">
                    {NIGERIAN_STATES.map((state) => (
                      <li
                        key={state}
                        className="dwu-option"
                        onClick={() => {
                          setCity(state);
                          setShowCityMenu(false);
                        }}
                      >
                        {state}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* VEHICLE CONFIGURATION SELECTOR FIELD */}
              <div className="dwu-dropdown-wrapper" ref={vehicleRef}>
                <div
                  className={`dwu-custom-select ${showVehicleMenu ? "is-open" : ""}`}
                  onClick={() => {
                    setShowVehicleMenu(!showVehicleMenu);
                    setShowCityMenu(false);
                  }}
                >
                  <span
                    className={vehicle ? "dwu-val-selected" : "dwu-placeholder"}
                  >
                    {vehicle ? vehicle : "Select your vehicle"}
                  </span>
                  <svg
                    className="dwu-chevron-icon"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {showVehicleMenu && (
                  <ul className="dwu-dropdown-list">
                    {VEHICLE_TYPES.map((type) => (
                      <li
                        key={type}
                        className="dwu-option"
                        onClick={() => {
                          setVehicle(type);
                          setShowVehicleMenu(false);
                        }}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* SUBMIT EXECUTION ACTION BUTTON */}
              <button type="submit" className="dwu-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
