"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [active, setActive] = useState(false);
  if (active) return <iframe src={`https://drive.google.com/file/d/${videoId}/preview`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="eager" />;
  return <button className="video-launch" type="button" onClick={() => setActive(true)} aria-label={`Play ${title}`}><span className="video-play"><Play size={25} fill="currentColor" /></span><span className="video-launch-label">Play fashion film</span></button>;
}
