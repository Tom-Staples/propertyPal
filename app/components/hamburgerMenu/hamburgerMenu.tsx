'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGripVertical,
  faHouse,
  faPeopleRoof,
  faChartLine,
  faGear,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import HamburgerLink from '@/components/hamburgerLink';
import { useState } from 'react';
import SearchBar from '@/components/searchBar';
import MessageLink from '../messageLink';
import IssueLink from '../issueLink';

const HamburgerMenu = () => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false);
  const links = [
    { link: '/', name: 'Overview', icon: faGripVertical },
    { link: '/properties', name: 'Properties', icon: faHouse },
    { link: '/tenants', name: 'Tenants', icon: faPeopleRoof },
    { link: '/analytics', name: 'Analytics', icon: faChartLine }
  ].map(({ link, name, icon }) => (
    <HamburgerLink
      link={link}
      name={name}
      icon={icon}
      key={name}
      setSideBarState={setSideBarActive}
    />
  ));

  return (
    <div>
      <button
        onClick={() => {
          setSideBarActive(true);
        }}
      >
        <FontAwesomeIcon size='2xl' icon={faBars} className='text-slate-600' />
      </button>
      <nav
        className={`${
          !sideBarActive && 'translate-x-52'
        } absolute transition-transform duration-500 h-dvh right-0 top-0 bg-orange-300 w-48 pb-4 font-bold`}
      >
        <ul className='flex flex-col h-full pb-2'>
          <button
            className='self-end mr-6 mt-2 mb-11 sm:mb-20 md:mb-5'
            onClick={() => {
              setSideBarActive(false);
            }}
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size='xl'
              className='text-slate-600'
            />
          </button>
          <li className='px-2 py-4 mt-6 sm:hidden'>
            <SearchBar />
          </li>
          {links}
          <IssueLink setSideBarState={setSideBarActive} />
          <MessageLink setSideBarState={setSideBarActive} />
          <HamburgerLink
            link='/settings'
            name='Settings'
            icon={faGear}
            setSideBarState={setSideBarActive}
          />
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
