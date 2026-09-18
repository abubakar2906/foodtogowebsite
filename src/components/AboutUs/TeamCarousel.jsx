"use client";
import React, { useState, useEffect } from "react";
import "./TeamCarousel.css";
const team1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595134/Agbede.jpeg";
const team2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594643/korede.png";
const team3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594627/valentine.png";
const team4 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594783/KINGSLEY.png";
const team5 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594919/joy.jpg";
const team6 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595062/henryCodes.jpeg";
const team7 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594787/Stephanie.png";
const team8 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595281/Abubakar_Yinusa.jpeg";
const team9 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594787/Okafor_Victor.jpeg"; // Placeholder for the 9th team member

const teamMembers = [
  {
    id: 1,
    name: "AGBEDE OLUWADOLAPO MOTUNRAYO",
    role: "PRODUCT DESIGNER",
    image: team1,
  },
  {
    id: 2,
    name: "KOREDE EZETAH-DARE",
    role: "FULL STACK DEVELOPER",
    image: team2,
  },
  {
    id: 3,
    name: "ANTWI VALENTINE",
    role: "FRONTEND DEVELOPER",
    image: team3,
  },
  {
    id: 4,
    name: "KINGSLEY ANAGOR",
    role: "BACKEND DEVELOPER",
    image: team4,
  },
  {
    id: 5,
    name: "JOY IHEANACHO",
    role: "PRODUCT DESIGNER",
    image: team5,
  },

  {
    id: 6,
    name: "HENRY FALOLU",
    role: "FRONTEND MOBILE DEVELOPER",
    image: team6,
  },

  {
    id: 7,
    name: "STEPHANIE LEWIS",
    role: "FRONTEND MOBILE DEVELOPER",
    image: team7,
  },

  {
    id: 78,
    name: "ABUBAKAR YINUSA",
    role: "FULL STACK DEVELOPER",
    image: team8,
  },

  {
    id: 9,
    name: "OKAFOR VICTOR CHIBUIKE",
    role: "PRODUCT DESIGNER",
    image: team9,
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set number of cards to reveal at a time based on layout requirements
  const visibleCards = 4;
  const maxIndex = Math.max(0, teamMembers.length - visibleCards);

  // Auto Scroll Engine
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop back smoothly to start if it hits the end of track
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // Transitions every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [maxIndex]);

  return (
    <section className="tc-section">
      <h2 className="tc-main-title">Meet The Team</h2>

      <div className="tc-slider-container">
        {/* Carousel Window Viewport */}
        <div className="tc-carousel-viewport">
          <div
            className="tc-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="tc-card-slide">
                <div className="tc-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="tc-avatar-img"
                  />
                </div>
                <div className="tc-info">
                  <h3 className="tc-name">{member.name}</h3>
                  <p className="tc-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
