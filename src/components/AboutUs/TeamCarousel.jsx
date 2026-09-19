"use client";
import React, { useEffect, useRef, useState } from "react";
import "./TeamCarousel.css";
const team1 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789595134/Agbede.jpeg";
const team2 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594643/korede.png";
const team3 = "https://res.cloudinary.com/ddzackjqq/image/upload/v1789594627/valentine.png";
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
  const viewportRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const pageCount = Math.ceil(teamMembers.length / visibleCards);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      setVisibleCards(width <= 480 ? 1 : width <= 768 ? 2 : width <= 1024 ? 3 : 4);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const goToPage = (page) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextPage = Math.max(0, Math.min(page, pageCount - 1));
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const left = pageCount > 1 ? (nextPage / (pageCount - 1)) * maxScroll : 0;
    viewport.scrollTo({ left, behavior: "smooth" });
    setCurrentPage(nextPage);
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const page = maxScroll > 0 ? Math.round((viewport.scrollLeft / maxScroll) * (pageCount - 1)) : 0;
    setCurrentPage(Math.min(pageCount - 1, page));
  };

  return (
    <section className="tc-section">
      <h2 className="tc-main-title">Meet The Team</h2>

      <div className="tc-slider-container">
        {/* Carousel Window Viewport */}
        <div
          className="tc-carousel-viewport"
          ref={viewportRef}
          onScroll={handleScroll}
          aria-label="Team members carousel"
        >
          <div className="tc-track">
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

        <div className="tc-carousel-controls">
          <button
            type="button"
            className="tc-arrow"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous team members"
          >
            &#8592;
          </button>
          <div className="tc-pagination" aria-label="Choose a carousel page">
            {Array.from({ length: pageCount }, (_, page) => (
              <button
                type="button"
                key={page}
                className={`tc-dot ${currentPage === page ? "is-active" : ""}`}
                onClick={() => goToPage(page)}
                aria-label={`Go to team page ${page + 1}`}
                aria-current={currentPage === page ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            className="tc-arrow"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pageCount - 1}
            aria-label="Next team members"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
