import React from 'react';
import './globals.scss';
import { Inter } from 'next/font/google';
import SWRProvider from '../components/SWRProvider';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Каталог користувачів | Next.js SSR',
  description: 'Каталог користувачів з використанням Next.js, TypeScript та SSR',
  keywords: 'next.js, typescript, ssr, user catalog, users',
  authors: [{ name: 'BozhPet', url: 'https://example.com' }],
};

export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={inter.variable}>
      <body className={inter.className}>
        <SWRProvider>
          {children}
        </SWRProvider>
      </body>
    </html>
  );
} 