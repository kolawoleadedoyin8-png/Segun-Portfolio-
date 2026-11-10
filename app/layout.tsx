import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Segun | AI Fashion Video Creator",
  description: "Cinematic AI fashion videos, product films and collection campaigns for clothing brands. Turn product photos into motion with Segun.",
  metadataBase: new URL("https://segun-portfolio-two.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en"><body>{children}</body></html>);
}
