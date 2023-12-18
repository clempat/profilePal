import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

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
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col w-full max-w-7xl items-center justify-center">
              {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
