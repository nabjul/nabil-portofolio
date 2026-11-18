import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabil Zulfan Nurtsani | IoT, Network & IT Infrastructure Portfolio",
  description:
    "Official Internship Portfolio of Nabil Zulfan Nurtsani — Computer Engineering Technology student at IPB University specializing in IoT & Embedded Systems, Cisco Networking (CCNA), and IT Infrastructure.",
  keywords: [
    "Nabil Zulfan Nurtsani",
    "IPB University",
    "Computer Engineering Technology",
    "Teknologi Rekayasa Komputer",
    "IoT Developer",
    "Network Engineer",
    "CCNA",
    "IT Support",
    "Portfolio Magang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080b0a] text-white selection:bg-[#18b779]/30 selection:text-emerald-200">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
