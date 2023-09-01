import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuto Ichihara",
  description: "Portfolio Page",
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
        <div className="flex h-full">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
