import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Manase Utilities | Irrigation & Solar Solutions for African Agriculture",
  description: "Leading provider of irrigation and solar energy solutions for farms and agribusinesses across Zimbabwe. Sustainable, efficient, and reliable agricultural technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 