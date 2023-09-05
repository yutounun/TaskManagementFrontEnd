import "@/globals.css";
import type { Metadata } from "next";
import { ThemeContextProvider } from "@/_context/theme";

export const metadata: Metadata = {
  title: "Task Management",
  description: "Task Management App",
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
