"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "I had product photos ready, but I couldn't picture how to turn them into a campaign. Seeing the pieces brought to life in motion gave me a fresh direction for the collection.",
    role: "Independent clothing brand owner",
    focus: "Product photos to campaign",
  },
  {
    quote: "What stood out was the attention to the mood of the brand. The visuals felt much closer to the fashion story I wanted to tell than a standard product post.",
    role: "Emerging fashion label",
    focus: "Brand-led visual direction",
  },
  {
    quote: "The concept made it easier to imagine how our new pieces could be introduced on social media. It showed me that a simple product image can become part of a bigger story.",
    role: "Small fashion business",
    focus: "Collection launch concept",
  },
  {
    quote: "I wanted something that would catch attention without losing the details of the clothing. The creative direction balanced the product and the overall atmosphere.",
    role: "Contemporary apparel brand",
    focus: "Fashion product storytelling",
  },
  {
    quote: "The video concept gave the collection more personality. Instead of showing individual items one after another, it helped create a consistent visual feel.",
    role: "Online clothing boutique",
    focus: "Consistent campaign visuals",
  },
  {
    quote: "I liked how the idea started with what the brand already had. It made fashion video feel more approachable, even without a full studio production.",
    role: "Growing fashion label",
    focus: "Photo-to-video creative",
  },
];

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const move = (direction: number) => {
    setActive((index) => (index + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-experience" aria-roledescription="carousel" aria-label="Illustrative testimonial examples">
      <div className="testimonial-stage">
        <div className="testimonial-side-note">
          <span>THE PEOPLE</span><span>BEHIND THE</span><span>PROJECTS</span>
          <i />
          <strong>{String(active + 1).padStart(2, "0")}<small> / 06</small></strong>
        </div>

        <article className="testimonial-feature" key={active} aria-live="polite">
          <div className="testimonial-feature-top">
            <span className="testimonial-kicker"><Sparkles size={13} /> SAMPLE CLIENT VOICE</span>
            <Quote className="testimonial-quote-icon" size={46} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div className="testimonial-feature-copy">
            <span className="testimonial-overline">ILLUSTRATIVE EXAMPLE · NOT A REAL REVIEW</span>
            <h3>“{current.quote}”</h3>
            <p className="testimonial-focus">{current.focus}</p>
          </div>
          <div className="testimonial-feature-bottom">
            <div className="testimonial-client">
              <span className="testimonial-avatar">{String(active + 1).padStart(2, "0")}</span>
              <div><strong>{current.role}</strong><small>Fictional example · replace with verified client feedback</small></div>
            </div>
            <span className="testimonial-authenticity">SAMPLE COPY</span>
          </div>
          <span className="testimonial-watermark">“</span>
        </article>
      </div>

      <div className="testimonial-navigation">
        <div className="testimonial-navigation-label"><span>EXAMPLE STORIES</span><strong>{String(active + 1).padStart(2, "0")} <i>—</i> 06</strong></div>
        <div className="testimonial-progress" role="group" aria-label="Choose sample testimonial">
          {testimonials.map((item, index) => (
            <button key={index} type="button" className={index === active ? "testimonial-progress-item is-active" : "testimonial-progress-item"} onClick={() => setActive(index)} aria-label={`Show sample testimonial ${index + 1}`} aria-current={index === active ? "true" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span><i />
            </button>
          ))}
        </div>
        <div className="testimonial-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial"><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial"><ArrowRight size={17} /></button>
        </div>
      </div>
      <p className="testimonial-honesty-note">These six testimonials are illustrative sample copy, not endorsements or feedback from actual clients. Replace them with genuine, approved reviews before presenting them as client experiences.</p>
    </div>
  );
}
