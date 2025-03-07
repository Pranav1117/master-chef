import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";
import { Providers } from "./providers";

const outfit = Outfit({ subsets: ["latin"], weight: "400" });

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
      <body className={`${outfit.className}`}>
        <Providers>
          <Navbar />
          <div className="min-h-[80vh]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
