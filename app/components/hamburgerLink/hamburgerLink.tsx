'use client';
import React from 'react';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import isLinkActive from 'helpers/isLinkActive';

const HamburgerLink = ({
  link,
  name,
  icon,
  setSideBarState
}: {
  link: string;
  name: string;
  icon: IconProp;
  setSideBarState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const currentPath: string = usePathname();
  const linkActive: boolean = isLinkActive(currentPath, link);
  return (
    <Link
      href={link}
      className={`${name === 'Settings' && 'mt-auto'}`}
      onClick={() => {
        setSideBarState(false);
      }}
    >
      <li
        className={`${
          linkActive && 'bg-slate-50'
        } py-2 my-2 mr-6 rounded-r-lg pl-2`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`${currentPath === link && 'bg-white'} w-8 mr-2`}
          size='xl'
        />
        {name}
      </li>
    </Link>
  );
};

export default HamburgerLink;
