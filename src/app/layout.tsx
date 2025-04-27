import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEANDER - 기술, 예술, 향기의 융합",
  description: "기술(Technology), 예술(Art), 그리고 향기(Fragrance)의 경계에서 새로운 감각적 경험을 구현합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-black text-white relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
