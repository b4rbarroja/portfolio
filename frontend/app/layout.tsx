import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Alexandria } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-primary",
});

const alexandria = Alexandria({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "جبر — معرض الأعمال",
  description: "معرض أعمال جبر — مطور ويب متكامل. أصمم وأطور مواقع وتطبيقات ويب حديثة، متاجر إلكترونية، ومنصات مخصصة باحترافية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${ibmPlexSansArabic.variable} ${alexandria.variable} h-full w-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col overflow-x-hidden bg-surface font-sans">
        <div className="flex-1 flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
