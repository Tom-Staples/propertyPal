import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Property-Pal',
  description:
    'Dashboard for rental property management and tenant communication'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
