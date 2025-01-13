import React from 'react';
import AddPropertyIcon from '@/components/addPropertyIcon';

const IconBar = () => {
  return (
    <ul className='flex justify-end w-80 pr-2'>
      <li className='px-4 hover:scale-105 hover:opacity-90 py-2 rounded-lg bg-orange-300'>
        <AddPropertyIcon />
        <span className='ml-8'>Add new property</span>
      </li>
    </ul>
  );
};

export default IconBar;
