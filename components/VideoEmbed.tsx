"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoEmbed({ videoId, title, variant = "default" }: { videoId: string; title: string; variant?: "default" | "hero" }) {
  const [active, setActive] = useState(false);

  if (variant === "hero") {
    return <iframe
      className="hero-video-frame"
      src={`https://drive.google.com/file/d/${videoId}/preview?autoplay=1&mute=1`}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      loading="eager"
    />;
  }

  if (active) return <iframe src={`https://drive.google.com/file/d/${videoId}/preview`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="eager" />;

  return <button className="video-launch" type="button" onClick={() => setActive(true)} aria-label={`Play ${title}`}><span className="video-play"><Play size={25} fill="currentColor" /></span><span className="video-launch-label">Play fashion film</span></button>;
}
