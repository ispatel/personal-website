import type { Metadata } from "next";
import { Archivo, Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${delaGothicOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
