import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ['latin'],
   variable: "--font-outfit",
  weight: ['300', '400', '500', '600', '700'],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Codys Commerce",
  description: "Build and scale your eCommerce business with us.",
  openGraph: {
    title: "Codys Commerce",
    description: "We help you launch and grow your online store.",
    url: "https://www.codyscommerce.com",
    siteName: "Codys Commerce",
    images: [
      {
        url: "/favicon-3.png", 
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">{children}</body>
    </html>
  );
}
