import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Master Chef",
  description: "Find best receipes and dishes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="overflow-y-auto min-h-[80vh]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
