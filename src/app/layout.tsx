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
      <body className={inter.className}>
        <NextTopLoader
          color="#30EEFC"
          speed={500}
          showSpinner={false}
          height={2}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
