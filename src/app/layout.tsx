import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clone - Club LA NACIÓN",
  description: "Página web clon de Club La Nación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.className} ${sourceSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
