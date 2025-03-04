'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import isLinkActive from 'helpers/isLinkActive';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavBarLinkProps {
  link: string;
  name: string;
  icon: IconProp;
}

const NavBarLink = ({
  link,
  name,
  icon
}: NavBarLinkProps): React.JSX.Element => {
  const currentPath: string = usePathname();
  const linkActive = isLinkActive(currentPath, link);

  return (
    <Link href={link} className={`${name === 'Settings' && 'mt-auto'}`}>
      <li
        className={`${
          linkActive && 'bg-slate-50 rounded-l-lg'
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
