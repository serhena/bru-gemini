import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Bruno Restrings | Tennis Racquet Services in Adelaide',
  description: 'Professional tennis racquet restringing services in Adelaide, SA. Fast turnaround and premium strings for all levels of play.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
