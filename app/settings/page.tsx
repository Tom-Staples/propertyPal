import NavBar from '@/components/navBar';
import React from 'react';

const SettingsPage = () => {
  return (
    <>
      <NavBar />
      <main className='row-start-3 row-span-10 md:row-span-11 md:row-start-2 md:col-start-4 lg:col-start-3 xl:col-start-2 md:col-span-8 lg:col-span-10 xl:col-span-9 p-2 mr-4 mb-4 md:mt-8'>
        Settings page
      </main>
    </>
  );
};

export default SettingsPage;
