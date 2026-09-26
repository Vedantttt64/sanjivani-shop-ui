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
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/sanjivani-logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/sanjivani-logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/sanjivani-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/sanjivani-logo.png" />
      </head>
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
