"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Sparkles } from "lucide-react";

const clients = Array.from({ length: 6 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
}));

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const move = (direction: number) => {
    setActive((current) => (current + direction + clients.length) % clients.length);
  };

  return (
    <div className="testimonial-experience" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="testimonial-stage">
        <div className="testimonial-side-note">
          <span>THE PEOPLE</span><span>BEHIND THE</span><span>PROJECTS</span>
          <i />
          <strong>{clients[active].number}<small> / 06</small></strong>
        </div>

        <article className="testimonial-feature" key={active} aria-live="polite">
          <div className="testimonial-feature-top">
            <span className="testimonial-kicker"><Sparkles size={13} /> THE CLIENT VOICE</span>
            <Quote className="testimonial-quote-icon" size={46} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div className="testimonial-feature-copy">
            <span className="testimonial-overline">A SPACE FOR REAL FEEDBACK</span>
            <h3>Every great collaboration has a story.</h3>
            <p>This is where Client {clients[active].number}’s experience will appear. Add their exact words here after the project, then include their name and brand only with permission.</p>
          </div>
          <div className="testimonial-feature-bottom">
            <div className="testimonial-client">
              <span className="testimonial-avatar">{clients[active].number}</span>
              <div><strong>Client {clients[active].number}</strong><small>Fashion brand partner · awaiting feedback</small></div>
            </div>
            <span className="testimonial-authenticity">REAL WORDS. REAL WORK.</span>
          </div>
          <span className="testimonial-watermark">“</span>
        </article>
      </div>

      <div className="testimonial-navigation">
        <div className="testimonial-navigation-label"><span>CLIENT STORIES</span><strong>{clients[active].number} <i>—</i> 06</strong></div>
        <div className="testimonial-progress" role="group" aria-label="Choose testimonial slide">
          {clients.map((client, index) => (
            <button key={client.number} type="button" className={index === active ? "testimonial-progress-item is-active" : "testimonial-progress-item"} onClick={() => setActive(index)} aria-label={`Show client testimonial ${index + 1}`} aria-current={index === active ? "true" : undefined}>
              <span>{client.number}</span><i />
            </button>
          ))}
        </div>
        <div className="testimonial-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial"><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial"><ArrowRight size={17} /></button>
        </div>
      </div>
      <p className="testimonial-honesty-note">I only publish genuine client feedback, with permission. No invented reviews or borrowed names.</p>
    </div>
  );
}
