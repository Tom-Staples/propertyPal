import React from 'react';
import HamburgerMenu from '../hamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const IconBar = () => {
  return (
    <ul className='flex justify-end pr-2'>
      <li className='md:hidden p-2'>
        <HamburgerMenu />
      </li>
      <Link
        href='/dashboard/properties/add-property'
        className='hidden md:block'
      >
        <li className='px-4 hover:scale-105 hover:opacity-90 py-2 rounded-lg bg-orange-300 font-bold'>
          <span className='fa-layers'>
            <FontAwesomeIcon
              icon={faHouseMedical}
              size='xl'
              className='text-slate-600'
            />
          </span>
          <span className='ml-6'>Add new property</span>
        </li>
      </Link>
    </ul>
  );
};

export default IconBar;
