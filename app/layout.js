import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HackFusion | Custom Website Development Services in India",
  description: "HackFusion offers top-notch website development services, custom solutions for business growth, and digital transformation. We specialize in high-performance web applications, UI/UX design, and e-commerce solutions tailored to your needs.",
  keywords: "Hackfusion, website development, portfolio, web design, React, Next.js, India, digital solutions, UI/UX design, custom websites, e-commerce development, SEO, mobile-responsive websites",
  author: "Vinay Nath Tiwary",
  charset: "UTF-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewport: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" />
        <meta name="description" content="HackFusion offers top-notch website development services, custom solutions for business growth, and digital transformation. We specialize in high-performance web applications, UI/UX design, and e-commerce solutions tailored to your needs." />
        <meta name="keywords" content="Hackfusion, website development, portfolio, web design, React, Next.js, India, digital solutions, UI/UX design, custom websites, e-commerce development, SEO, mobile-responsive websites" />
        <meta name="author" content="Vinay Nath Tiwary" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="HackFusion | Top Website Development Company in India" />
        <meta property="og:description" content="HackFusion offers top-notch website development services, custom solutions for business growth, and digital transformation. Build high-performance web applications tailored to your needs." />
        <meta property="og:image" content="https://hackfusion.in/path-to-image.jpg" />
        <meta property="og:url" content="https://hackfusion.in" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="HackFusion" />
        
        {/* LinkedIn Meta Tags */}
        <meta name="linkedin:title" content="HackFusion | Custom Website Development in India" />
        <meta name="linkedin:description" content="HackFusion offers top-notch website development services tailored for business growth and digital transformation. Contact us for high-performance web applications and custom e-commerce solutions." />
        <meta name="linkedin:image" content="https://hackfusion.in/path-to-image.jpg" />
        <meta name="linkedin:site" content="HackFusion" />

        <title>HackFusion | Website Development Services in India</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
