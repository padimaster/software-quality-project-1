import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/layout';

import { Krona_One } from 'next/font/google';

const inter = Krona_One({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Asanas',
  description: 'Meditación y Yoga'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen flex flex-col justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
