import BreadcrumbBar from '@/components/breadcrumbBar';
import NavBar from '@/components/navBar';
import React from 'react';
import Link from 'next/link';

const PropertiesPage = () => {
  return (
    <>
      <NavBar />
      <main className='row-span-11 row-start-2 md:col-start-4 lg:col-start-3 xl:col-start-2 md:col-span-8 lg:col-span-10 xl:col-span-9 p-2 mb-4 md:mt-8'>
        <BreadcrumbBar />
        <Link href='/dashboard/properties/add-property'>Add property</Link>
        <br />
        Properties page
      </main>
    </>
  );
};

export default PropertiesPage;
