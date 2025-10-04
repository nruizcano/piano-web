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
  title: "Nerea Ruiz Cano | Piano",
  description: "Nerea Ruiz Cano's piano website featuring her piano covers, sheet music, musical insights, equipment, contact information, and social links."
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
        <main className="row-start-2 flex flex-col items-start px-8 sm:px-20 w-full max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
