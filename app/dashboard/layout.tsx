import Header from '@/components/header';

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-rows-12 grid-cols-1 md:grid-cols-12 xl:grid-cols-10 gap-x-2 bg-slate-50 h-full text-slate-600'>
      <Header />
      {children}
    </div>
  );
}
