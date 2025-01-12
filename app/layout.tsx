// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
// import FloatingButtons from '@/components/floating-buttons';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Noble Energy - Leading Solar Energy Provider',
//   description: 'Professional solar panel installation and renewable energy solutions for homes and businesses.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           <div className="flex min-h-screen flex-col">
//             <Navbar />
//             <main className="flex-1 pt-16">{children}</main>
//             <Footer />
//             <FloatingButtons />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


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
  title: 'Noble Energy - Leading Solar Energy Provider',
  description: 'Professional solar panel installation and renewable energy solutions for homes and businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </Head>
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
