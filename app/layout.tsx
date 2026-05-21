import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { LanguageProvider } from "@/context/languageContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsdanai.vercel.app"),

  title: "Danai Puttachart",

  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
