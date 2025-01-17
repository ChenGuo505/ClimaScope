import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClimaScope",
  description: "A weather app built with Next.js, powered by Tomorrow.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${cn(
          "--font-geist-sans",
          geistSans.className
        )} antialiased`}
      >
        <div className="flex flex-row">
          <main className="mx-auto md:basis-3/4 basis-5/6">{children}</main>
        </div>
      </body>
    </html>
  );
}
