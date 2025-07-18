
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./context/authContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Course Generator",
  keywords: "AI, Course, Generator, Next.js",
  authors: [{ name: "Ravi", url: "" }],
  creator: "Ravi",
  publisher: "Ravi",
  openGraph: {
    title: "AI Course Generator",
    description: "A Next.js application for generating AI courses",
    url: "https://yourdomain.com",
    siteName: "AI Course Generator",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,  
        height: 630,
        alt: "AI Course Generator OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "A Next.js application for generating AI courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <SessionWrapper>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </SessionWrapper>
    </html>
  );
}
