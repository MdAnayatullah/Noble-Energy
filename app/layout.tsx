import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SolarTech Solutions - Leading Solar Energy Provider',
  description: 'Professional solar panel installation and renewable energy solutions for homes and businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
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