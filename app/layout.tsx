import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
    <html
      lang='en'
      className='overflow-x-hidden md:overflow-x-auto h-dvh md:h-full'
    >
      <body className='relative md:static overflow-x-hidden md:overflow-x-auto h-dvh md:h-full'>
        {children}
      </body>
    </html>
  );
}
