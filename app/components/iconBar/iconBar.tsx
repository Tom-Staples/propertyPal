import React from 'react';
import AddPropertyIcon from '@/components/addPropertyIcon';

const IconBar = () => {
  const listStyling = 'px-4 hover:scale-110 hover:opacity-80';

  return (
    <ul className='flex justify-end w-80 pr-2'>
      <li className={listStyling}>
        <AddPropertyIcon />
      </li>
    </ul>
  );
};

export default IconBar;
