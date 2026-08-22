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
  title: "Hitesh Ahuja — Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, Angular, and AI-integrated architectures.",
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
