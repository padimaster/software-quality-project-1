import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/layout';

import { Krona_One } from 'next/font/google';
import { Locale, i18n } from '@/i18n.config';

const inter = Krona_One({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Asanas',
  description: 'Meditación y Yoga'
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
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
