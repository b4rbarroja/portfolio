import type { Metadata } from "next";
import { thmanyahSans, thmanyahSerifDisplay, thmanyahSerifText } from "@/lib/fonts";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      className={`${thmanyahSans.variable} ${thmanyahSerifDisplay.variable} ${thmanyahSerifText.variable} h-full w-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col overflow-x-hidden bg-surface font-thmanyah-sans">
        <div className="flex-1 flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
