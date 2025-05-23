import "./globals.css";
import { inter } from './fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WHOOP Clone",
  description: "Practice for an interview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
