import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"], variable: "--font-caption",
  weight: "300",
});

export const metadata: Metadata = {
  title: "MarketMail",
  description: "The Best massive Email sender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
