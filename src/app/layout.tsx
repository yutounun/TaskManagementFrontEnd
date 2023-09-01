import type { Metadata } from "next";
import Navbar from "./common/Navbar";

export const metadata: Metadata = {
  title: "Task Management",
  description: "Task Management",
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
