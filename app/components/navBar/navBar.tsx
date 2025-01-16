'use client';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripVertical,
  faHouse,
  faPeopleRoof,
  faChartLine,
  faGear,
  faMessage,
  faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '@public/logo.png';
import { usePathname } from 'next/navigation';
import useGetNotificationCounter from 'hooks/useGetNotificationCounter';
import getIconOverlay from 'helpers/getIconOverlay';

const NavBar = () => {
  // State management & derived values
  // Messages
  const messageCount: number | null = useGetNotificationCounter(
    'https://fakeData.com/fakeroutenotifs'
  );
  const derivedMessageCountDisplayValue: string =
    !messageCount || messageCount === -1 ? '' : messageCount.toString();
  const messageOverlay: React.JSX.Element | undefined = getIconOverlay(
    {
      spinner: 'right-10 up-4',
      exclamation: 'right-10 up-4',
      circle: 'shrink-4 right-20 up-14'
    },
    messageCount,
    derivedMessageCountDisplayValue,
    'text-white'
  );

  // Issues
  const issueCount: number | null = useGetNotificationCounter(
    'https://fakeapi.com/fakeroute'
  );
  const derivedIssueDisplayValue: string =
    !issueCount || issueCount === -1 ? '' : issueCount.toString();
  const issueOverlay: React.JSX.Element | undefined = getIconOverlay(
    {
      spinner: 'shrink-2 right-24 up-14',
      exclamation: 'text-slate-600 right-24 up-14',
      circle: 'shrink-6 right-24 up-14'
    },
    issueCount,
    derivedIssueDisplayValue,
    'text-slate-600'
  );

  // Current path
  const currentPath: string = usePathname();

  //Re-used component styling
  const listStyling: string =
    'py-4 mb-2 pl-1 hover:scale-105 hover:bg-orange-200 rounded-l-lg';
  const iconStyling: string = 'mr-2 text-slate-600 w-8';
  const activeLinkStyling: string = 'bg-slate-50 rounded-l-lg';

  // Mapped links with same styling / format
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
        <FontAwesomeIcon icon={icon} size='xl' className={iconStyling} />
        {name}
      </li>
    </Link>
  ));

  return (
    <nav className='hidden md:flex flex-col order-first md:col-span-3 lg:col-span-2 xl:col-span-1 row-span-12 bg-orange-300 pt-2 text-slate-600 font-bold max-w-44'>
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
            <span className='fa-layers'>
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                size='xl'
                className={iconStyling}
              />
              {issueOverlay}
            </span>
            <span className='ml-6'>Issues</span>
            <span
              className={`${
                !derivedIssueDisplayValue && 'hidden'
              } p-[5px] ml-6 xl:ml-5 text-sm text-white bg-slate-600 rounded-full`}
            >
              {derivedIssueDisplayValue}
            </span>
          </li>
        </Link>
        <Link href='messages'>
          <li
            className={`${listStyling} ${
              currentPath === '/messages' ? activeLinkStyling : ''
            }`}
          >
            <span className='fa-layers'>
              <FontAwesomeIcon
                icon={faMessage}
                size='xl'
                className={iconStyling}
              />
              {messageOverlay}
            </span>
            <span className='ml-4 xl:ml-4'>Messages</span>
            <span
              className={`${
                !derivedIssueDisplayValue && 'hidden'
              } p-[5px] ml-2 xl:ml-1 text-sm text-white bg-slate-600 rounded-full`}
            >
              {derivedMessageCountDisplayValue}
            </span>
          </li>
        </Link>
        <Link href='settings' className='mt-auto'>
          <li
            className={`${listStyling} ${
              currentPath === '/settings' ? activeLinkStyling : ''
            }`}
          >
            <FontAwesomeIcon icon={faGear} size='xl' className={iconStyling} />
            Settings
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
