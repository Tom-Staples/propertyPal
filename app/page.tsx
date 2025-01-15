import React from 'react';
import NavBar from './components/navBar';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className='row-span-11 md:row-start-2 md:col-start-3 xl:col-start-2 md:col-span-8 xl:col-span-9 p-2 mr-4 mb-4'>
        Homepage
      </main>
    </>
  );
};

export default HomePage;
