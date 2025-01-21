import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const reviews = [
    { name: "Sam Smith ", feedback: "The meals were outstanding, and the environment was warm and welcoming." },
    { name: "Bella Holmes", feedback: "I loved the service and the food was beyond my expectations!" },
    { name: "Rupert Field", feedback: "An amazing spot with delightful flavors and exceptional hospitality." },
  ];

  return (
    <div className="testimonials-container">
      <h2>Our Guests Love Us</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="testimonial-item">
            <p><strong>{review.name}</strong></p>
            <p>\"{review.feedback}\"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testimonials;

