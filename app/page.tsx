import Header from '@/components/header/header';
import NavBar from '@/components/navBar';

import React from 'react';

const HomePage = () => {
  return (
    <div className='grid grid-rows-2 grid-cols-10'>
      <Header />
      <NavBar />
    </div>
  );
};

export default HomePage;
