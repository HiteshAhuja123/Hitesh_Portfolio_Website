import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "Hitesh Ahuja — Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, Angular, and AI-integrated architectures.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Particles />
        {children}
      </body>
    </html>
  );
}
