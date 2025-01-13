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

const NavBar = () => {
  const listStyling: string = 'py-4 hover:scale-105 hover:opacity-90';
  const iconStyling: string = 'mr-2 text-slate-600 w-10';

  return (
    <nav className='order-first col-span-1 row-span-2 h-screen bg-orange-300 pt-2 text-slate-600 font-bold flex flex-col'>
      <Link href='/' className='self-center'>
        <Image src={logo} alt='property pal' />
      </Link>
      <ul className='flex flex-col mt-10 pl-2'>
        <li className={listStyling}>
          <Link href='/'>
            <FontAwesomeIcon
              icon={faGripVertical}
              size='2xl'
              className={iconStyling}
            />
            Overview
          </Link>
        </li>
        <li className={listStyling}>
          <Link href='properties'>
            <FontAwesomeIcon
              icon={faHouse}
              size='2xl'
              className={iconStyling}
            />
            Properties
          </Link>
        </li>
        <li className={listStyling}>
          <Link href='tenants'>
            <FontAwesomeIcon
              icon={faPeopleRoof}
              size='2xl'
              className={iconStyling}
            />
            Tenants
          </Link>
        </li>
        <li className={listStyling}>
          <Link href='analytics'>
            <FontAwesomeIcon
              icon={faChartLine}
              size='2xl'
              className={iconStyling}
            />
            Analytics
          </Link>
        </li>
        <li className={listStyling}>
          <Link href='issues'>
            <NotificationIcon />
            <span className='ml-8'>Issues</span>
          </Link>
        </li>
        <li className={`${listStyling}`}>
          <Link href='messages'>
            <MessageIcon />
            <span className='ml-8'>Messages</span>
          </Link>
        </li>
        <li className={`${listStyling} absolute bottom-2`}>
          <Link href='settings'>
            <FontAwesomeIcon icon={faGear} size='2xl' className={iconStyling} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
