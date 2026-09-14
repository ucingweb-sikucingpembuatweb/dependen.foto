import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "dependent.foto — Foto yang punya cerita",
  description:
    "Jasa fotografi Indonesia untuk wisuda, lari, komunitas, portrait, dan event.",
  metadataBase: new URL("https://dependent.foto"),
  openGraph: {
    title: "dependent.foto",
    description: "Foto yang bukan cuma bagus. Foto yang terasa.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
