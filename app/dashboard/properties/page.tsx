import BreadcrumbBar from '@/components/breadcrumbBar';
import NavBar from '@/components/navBar';
import React from 'react';

const PropertiesPage = () => {
  return (
    <>
      <NavBar />
      <main className='mt-16 md:mt-0 row-span-11 row-start-2 md:col-start-4 lg:col-start-3 xl:col-start-2 md:col-span-8 lg:col-span-10 xl:col-span-9 p-2 mr-4 mb-4 md:mt-8'>
        <BreadcrumbBar />
        Properties page
      </main>
    </>
  );
};

export default PropertiesPage;
