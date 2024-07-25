import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Placement Cell CITK",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Author: Debanand Singha */}
      <body className={inter.className}>
        <NextTopLoader
          color="#98F5F9"
          speed={500}
          showSpinner={false}
          height={3}
        />
        <Header />
        {children}
        <Footer />
        <div style={{ display: "none" }}>Author: Debanand Singha (CSE)</div>
      </body>
    </html>
  );
}
