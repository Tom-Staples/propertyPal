import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '@/components/header';

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
        <div className='grid grid-rows-12 grid-cols-1 md:grid-cols-12 xl:grid-cols-10 gap-x-2 bg-slate-50 h-full text-slate-600'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
