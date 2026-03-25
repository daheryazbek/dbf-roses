import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "@/app/globals.css";

const headingFont = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DBF ROSES",
  description:
    "DBF ROSES is a B2B exporter and trader of Ecuadorian standard and premium roses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

