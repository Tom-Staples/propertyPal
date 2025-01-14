import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '@/components/header';
import NavBar from '@/components/navBar';

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
      <body className='grid grid-rows-2 grid-cols-10'>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
