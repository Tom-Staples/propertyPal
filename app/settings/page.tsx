import NavBar from '@/components/navBar';
import React from 'react';

const SettingsPage = () => {
  return (
    <>
      <NavBar />
      <main className='row-span-11 md:row-start-2 md:col-start-3 xl:col-start-2 md:col-span-8 xl:col-span-9 p-2 mr-4 mb-4'>
        Settings page
      </main>
    </>
  );
};

export default SettingsPage;
