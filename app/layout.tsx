import type { Metadata } from "next";
import "./globals.css";
import SnowAnimation from "./components/SnowAnimation";

export const metadata: Metadata = {
  title: "Fazil Dev",
  description: "Explore Mohomed Fazil's web development portfolio, featuring 5+ years of expertise in crafting responsive websites, dynamic solutions, and innovative designs. Transform your ideas into reality with professional web development services. #mohomedfazil #fazil #webdevelopmet #webdesign #developer #fazildev",
  metadataBase: new URL('https://fazildev.online/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SnowAnimation />
        {children}
      </body>
    </html>
  );
}
