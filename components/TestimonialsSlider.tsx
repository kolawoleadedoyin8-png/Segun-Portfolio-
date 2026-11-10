"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const clients = Array.from({ length: 6 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
}));

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const move = (direction: number) => {
    setActive((current) => (current + direction + clients.length) % clients.length);
  };

  return (
    <div className="testimonial-slider" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="testimonial-slide" aria-live="polite">
        <div className="testimonial-slide-top">
          <span className="testimonial-kicker">CLIENT FEEDBACK · {clients[active].number} / 06</span>
          <Quote className="testimonial-quote-icon" size={34} aria-hidden="true" />
        </div>
        <div className="testimonial-placeholder">
          <span className="testimonial-placeholder-line" />
          <h3>Make this space their voice.</h3>
          <p>Add an approved testimonial from Client {clients[active].number} here. Their words, name and brand can be featured once the feedback is received and permission is given.</p>
        </div>
        <div className="testimonial-slide-footer">
          <div className="testimonial-client">
            <span className="testimonial-avatar">{clients[active].number}</span>
            <div><strong>Client {clients[active].number}</strong><small>Feedback slot · awaiting approval</small></div>
          </div>
          <span className="testimonial-index">{clients[active].number} <i>/</i> 06</span>
        </div>
      </div>

      <div className="testimonial-controls">
        <div className="testimonial-dots" role="group" aria-label="Choose testimonial slide">
          {clients.map((client, index) => (
            <button
              key={client.number}
              type="button"
              className={index === active ? "testimonial-dot is-active" : "testimonial-dot"}
              onClick={() => setActive(index)}
              aria-label={`Go to client slide ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
        <div className="testimonial-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial"><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial"><ArrowRight size={17} /></button>
        </div>
      </div>
      <p className="testimonial-honesty-note">Only genuine client feedback will be published here, with permission.</p>
    </div>
  );
}
