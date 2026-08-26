import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProviderWrapper from "./ReduxProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjivani NGO",
  description: "Sanjivani NGO",
  icons: {
    icon: "/images/sanjivani-logo.png",
    shortcut: "/images/sanjivani-logo.png",
    apple: "/images/sanjivani-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ReduxProviderWrapper>
          {children}
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
