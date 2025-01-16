'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBarLink = ({
  link,
  name,
  icon
}: {
  link: string;
  name: string;
  icon: IconProp;
}): React.JSX.Element => {
  const currentPath: string = usePathname();

  return (
    <Link href={link} className={`${name === 'Settings' && 'mt-auto'}`}>
      <li
        className={`${
          currentPath === link && 'bg-slate-50 rounded-l-lg'
        } py-4 mb-2 pl-1 hover:scale-105 hover:bg-orange-200 rounded-l-lg`}
      >
        <FontAwesomeIcon
          icon={icon}
          size='xl'
          className='mr-2 text-slate-600 w-8'
        />
        {name}
      </li>
    </Link>
  );
};

export default NavBarLink;
