import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProfilePal",
  description: "Find your favorite profile pal",
};

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
      </body>
    </html>
  );
}
