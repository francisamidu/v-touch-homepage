import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "@fontsource-variable/inter";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "VTouch - Fashion Meets Excellence",
  description: "When fashion meets excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Providers>
          <main className="min-h-screen">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
