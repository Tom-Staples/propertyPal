import React from 'react';
import Header from '@/components/header';
import NavBar from '@/components/navBar';

const MessagesPage = () => {
  return (
    <div className='grid grid-rows-2 grid-cols-10'>
      <Header />
      <NavBar />
    </div>
  );
};

export default MessagesPage;
