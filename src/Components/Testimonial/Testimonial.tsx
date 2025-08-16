import React, { useState } from "react";
import "./Testimonal.css";

type Testimonial = {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    content:
      "Freya Aurora Camila's expert advice has been instrumental in expanding my wealth. Her recommendations are always on point, and I’ve seen consistent financial growth under her guidance.",
    image: "./clients/client02-free-img.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Benson",
    content:
      "Freya Aurora Camila's has been a trusted advisor, guiding me through complex financial decisions with clarity. Her support has been key in achieving my financial milestones.",
    image: "./clients/client01-free-img.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Rachel Lee",
    content:
      "Freya Aurora Camila's advice has given me complete confidence in my financial future. She helped me create a diversified portfolio and provided smart tax-saving strategies.",
    image: "./clients/testimonials-image02.png",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    content:
      "Freya Aurora Camila's depth of knowledge in wealth management is unmatched. Her guidance has been pivotal in helping me grow and safeguard my investments.",
    image: "./clients/testimonials-image.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Dave Godly",
    content:
      "Freya Aurora Camila's expert advice has been instrumental in expanding my wealth. Her recommendations are always on point, and I’ve seen consistent financial growth under her guidance.",
    image: "./clients/testimonials-image03.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Gloria Love",
    content:
      "Freya Aurora Camila's has been a trusted advisor, guiding me through complex financial decisions with clarity. Her support has been key in achieving my financial milestones.",
    image: "./clients/testimonials-image04.png",
    rating: 4,
  },
  {
    id: 7,
    name: "Stanley Lackey",
    content:
      "Freya Aurora Camila's advice has given me complete confidence in my financial future. She helped me create a diversified portfolio and provided smart tax-saving strategies.",
    image: "./clients/testimonials-image05.png",
    rating: 5,
  },
  {
    id: 8,
    name: "Princess Grace",
    content:
      "Freya Aurora Camila's depth of knowledge in wealth management is unmatched. Her guidance has been pivotal in helping me grow and safeguard my investments.",
    image: "./clients/testimonials-image06.png",
    rating: 4,
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (window.innerWidth <= 768) {
      return [testimonials[currentIndex]];
    } else {
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ];
    }
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="testimonial">
      <h3>TESTIMONIAL</h3>
      <h1>Clients Review</h1>
      <div className="testimonial-page">
        <div className="testimonial-slider">
          <button className="arrow left" onClick={handlePrev}>
            &#10094;
          </button>

          <div className="testimonial-cards">
            {visibleTestimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <div className="testimonial-content">
                  <p className="testimonial-text">"{t.content}"</p>
                  <p className="testimonial-name">- {t.name}</p>
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="star">
                        &#9733;
                      </span>
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, i) => (
                      <span key={i} className="star empty">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;