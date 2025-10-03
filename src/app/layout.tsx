import type { Metadata } from "next";
import { Crimson_Pro, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  weight: "400",
  variable: "--font-crimson-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: Update metadata
  title: "Nerea's Piano Covers",
  description: "A website for Nerea Ruiz Cano's piano covers and information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.className} ${crimsonText.className} antialiased grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16`}
      >
        <Header />
        <main className="row-start-2 flex flex-col items-center sm:items-start p-8 sm:p-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
