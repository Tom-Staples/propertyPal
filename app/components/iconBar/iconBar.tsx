import React from 'react';
import AddPropertyIcon from '@/components/addPropertyIcon';
import HamburgerMenu from '../hamburgerMenu';

const IconBar = () => {
  return (
    <ul className='flex justify-end pr-2'>
      <li className='md:hidden p-2'>
        <HamburgerMenu />
      </li>
      <li className='hidden md:block px-4 hover:scale-105 hover:opacity-90 py-2 rounded-lg bg-orange-300'>
        <AddPropertyIcon />
        <span className='ml-6'>Add new property</span>
      </li>
    </ul>
  );
};

export default IconBar;
