import type { Metadata } from "next";
import { Archivo, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hitesh-portfolio-website.vercel.app"),
  title: {
    default: "Hitesh Ahuja — Full Stack Software Engineer",
    template: "%s | Hitesh Ahuja",
  },
  description:
    "Hitesh Ahuja is a Full Stack Software Engineer at ICICI Lombard, building customer-facing insurance products with Next.js, React, Angular, TypeScript and AI integrations.",
  keywords: [
    "Hitesh Ahuja",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Angular",
    "TypeScript",
    "AI",
    "Insurance Technology",
  ],
  authors: [{ name: "Hitesh Ahuja" }],
  creator: "Hitesh Ahuja",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://hitesh-portfolio-website.vercel.app",
    siteName: "Hitesh Ahuja",
    title: "Hitesh Ahuja — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer at ICICI Lombard — Next.js, React, Angular, TypeScript and AI-integrated product engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitesh Ahuja — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer at ICICI Lombard — Next.js, React, Angular, TypeScript and AI-integrated product engineering.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <Cursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
