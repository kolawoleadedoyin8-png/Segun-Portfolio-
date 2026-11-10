import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Segun | AI Video Creator & Digital Creative",
  description: "Cinematic AI video production, creative campaigns and digital experiences by Segun.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}