'use client';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripVertical,
  faHouse,
  faPeopleRoof,
  faChartLine,
  faGear
} from '@fortawesome/free-solid-svg-icons';
import MessageIcon from '@/components/messgaeIcon';
import NotificationIcon from '@/components/notificationIcon';
import Image from 'next/image';
import logo from '@public/logo.png';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const listStyling: string =
    'py-4 mb-2 px-2 hover:scale-105 hover:bg-orange-200 rounded-l-lg';
  const iconStyling: string = 'mr-2 text-slate-600 w-10';
  const activeLinkStyling: string = 'bg-slate-50 rounded-l-lg';
  const currentPath: string = usePathname();
  const regularLinks: React.JSX.Element[] = [
    { link: '/', name: 'Overview', icon: faGripVertical },
    { link: '/properties', name: 'Properties', icon: faHouse },
    { link: '/tenants', name: 'Tenants', icon: faPeopleRoof },
    { link: '/analytics', name: 'Analytics', icon: faChartLine }
  ].map(({ link, name, icon }) => (
    <Link href={link} key={name}>
      <li
        className={`${listStyling} ${
          currentPath === link ? activeLinkStyling : ''
        }`}
      >
        <FontAwesomeIcon icon={icon} size='2xl' className={iconStyling} />
        {name}
      </li>
    </Link>
  ));

  return (
    <nav className='hidden md:flex flex-col order-first md:col-span-2 xl:col-span-1 row-span-12 bg-orange-300 pt-2 text-slate-600 font-bold'>
      <ul className='flex flex-col grow'>
        <li className='self-center mb-6'>
          <Link href='/'>
            <Image src={logo} alt='property pal' height={100} width={100} />
          </Link>
        </li>
        {regularLinks}
        <Link href='issues'>
          <li
            className={`${listStyling} ${
              currentPath === '/issues' ? activeLinkStyling : ''
            }`}
          >
            <NotificationIcon />
            <span className='ml-8'>Issues</span>
          </li>
        </Link>
        <Link href='messages'>
          <li
            className={`${listStyling} ${
              currentPath === '/messages' ? activeLinkStyling : ''
            }`}
          >
            <MessageIcon />
            <span className='ml-8'>Messages</span>
          </li>
        </Link>
        <Link href='settings' className='mt-auto'>
          <li
            className={`${listStyling} ${
              currentPath === '/settings' ? activeLinkStyling : ''
            }`}
          >
            <FontAwesomeIcon icon={faGear} size='2xl' className={iconStyling} />
            Settings
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
