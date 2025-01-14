import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Noble Energy',
  // description: 'Professional solar panel installation and renewable energy solutions for homes and businesses.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Noble Energy - Leading Solar Energy Provider',
    description: 'Professional solar panel installation and renewable energy solutions for homes and businesses.',
    url: 'https://nobleenergy.co',
    siteName: 'Noble Energy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noble Energy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noble Energy - Leading Solar Energy Provider',
    description: 'Professional solar panel installation and renewable energy solutions for homes and businesses.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className='dark'>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
            <FloatingButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
