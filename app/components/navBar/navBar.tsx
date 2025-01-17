import Link from 'next/link';
import React from 'react';
import {
  faGripVertical,
  faHouse,
  faPeopleRoof,
  faChartLine,
  faGear
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '@public/logo.png';
import NavBarLink from '@/components/navBarLink';
import MessageLink from '@/components/messageLink';
import IssueLink from '../issueLink';

const NavBar = () => {
  // Mapped links with same styling / format
  const regularLinks: React.JSX.Element[] = [
    { link: '/', name: 'Overview', icon: faGripVertical },
    { link: '/properties', name: 'Properties', icon: faHouse },
    { link: '/tenants', name: 'Tenants', icon: faPeopleRoof },
    { link: '/analytics', name: 'Analytics', icon: faChartLine }
  ].map(({ link, name, icon }) => (
    <NavBarLink link={link} name={name} icon={icon} key={name} />
  ));

  return (
    <nav className='hidden md:flex flex-col order-first md:col-span-3 lg:col-span-2 xl:col-span-1 row-span-12 bg-orange-300 pt-2 text-slate-600 font-bold lg:max-w-56'>
      <ul className='flex flex-col grow'>
        <li className='self-center mb-6'>
          <Link href='/'>
            <Image
              src={logo}
              alt='property pal'
              height={100}
              width={100}
              priority={true}
            />
          </Link>
        </li>
        {regularLinks}
        <IssueLink />
        <MessageLink />
        <NavBarLink link='/settings' name='Settings' icon={faGear} />
      </ul>
    </nav>
  );
};

export default NavBar;
