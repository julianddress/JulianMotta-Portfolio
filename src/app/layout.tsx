import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Motta",
  description: "Portfolio cretaed by Julian Motta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <title>Julian Motta</title>
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/menu.css" />
        <link rel="stylesheet" href="/css/flexbox/menu.css" />
        <link rel="stylesheet" href="/css/cover.css" />
        <link rel="stylesheet" href="/css/flexbox/cover.css" />
        <link rel="stylesheet" href="/css/about.css" />
        <link rel="stylesheet" href="/css/flexbox/about.css" />
        <link rel="stylesheet" href="/css/portfolio.css" />
        <link rel="stylesheet" href="/css/flexbox/portfolio.css" />
        <link rel="stylesheet" href="/css/experience.css" />
        <link rel="stylesheet" href="/css/flexbox/experience.css" />
        <link rel="stylesheet" href="/css/contact.css" />
        <link rel="stylesheet" href="/css/flexbox/contact.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/flexbox/footer.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200;400;500;600;700&display=swap"></link>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

      <Script src="/Script/body.js" strategy="afterInteractive" type="module" />
      <Script src="/Script/verificar.js" strategy="afterInteractive" type="module" />
      <Script src="/Script/validaciones.js" strategy="afterInteractive" type="module" />
      <Script src="/Script/app.js" strategy="afterInteractive" type="module" />

    </html>
  );
}
