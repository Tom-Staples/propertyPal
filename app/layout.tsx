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
    <html lang='en'>
      <body>
        <div className='grid grid-rows-12 grid-cols-10 gap-x-2 h-screen bg-slate-50'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
