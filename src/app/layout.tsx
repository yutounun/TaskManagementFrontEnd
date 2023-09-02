import "@/globals.css";
import type { Metadata } from "next";
import { ThemeContextProvider } from "@/context/theme";

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
      <body className="flex">
        <div className="h-full">
          <ThemeContextProvider>
            <main className="w-screen">{children}</main>
          </ThemeContextProvider>
        </div>
      </body>
    </html>
  );
}
