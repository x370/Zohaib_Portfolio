import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "M. Zohaib Safdar — Full-Stack MERN Developer",
  description:
    "Portfolio of M. Zohaib Safdar — Full-Stack Developer (MERN) building scalable web applications with React, Next.js, NestJS, and MongoDB.",
  keywords: [
    "Zohaib Safdar",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer Pakistan",
    "Node.js",
    "NestJS",
  ],
  authors: [{ name: "M. Zohaib Safdar" }],
  openGraph: {
    title: "M. Zohaib Safdar — Full-Stack MERN Developer",
    description:
      "Results-driven Full-Stack Developer building government-grade and enterprise web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider>
          <AOSProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
