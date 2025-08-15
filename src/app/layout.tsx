import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { localBusinessSchema } from "@/lib/config";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Grande Inc. - Fiber Optic Network Design & FTTX Deployment Specialists",
  description: "Leading fiber optic network design and FTTX deployment company. 25+ years experience serving telecom providers across North America. Complete solutions from core to edge infrastructure.",
  keywords: "fiber optic network design, FTTX deployment, telecom infrastructure consulting, fiber cable manufacturing, broadband expansion, enterprise fiber networks, municipal broadband, Miami telecommunications",
  authors: [{ name: "Grupo Grande Inc." }],
  creator: "Grupo Grande Inc.",
  publisher: "Grupo Grande Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://grupogrande.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Grupo Grande Inc. - Fiber Optic Network Design & FTTX Deployment",
    description: "Leading fiber optic network design and FTTX deployment company. 25+ years experience serving telecom providers across North America.",
    url: 'https://grupogrande.com',
    siteName: 'Grupo Grande Inc.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grupo Grande Inc. - Fiber Optic Network Design & FTTX Deployment",
    description: "Leading fiber optic network design and FTTX deployment company. 25+ years experience serving telecom providers across North America.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
