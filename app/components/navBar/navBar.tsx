import Link from 'next/link';
import React from 'react';
import {
  faGripVertical,
  faHouse,
  faPeopleRoof,
  faChartLine,
  faGear,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '@public/logo.png';
import NavBarLink from '@/components/navBarLink';
import MessageLink from '@/components/messageLink';
import IssueLink from '../issueLink';

interface RegularLink {
  link: string;
  name: string;
  icon: IconDefinition;
}

// Static Variables
const regularLinks: RegularLink[] = [
  { link: '/dashboard', name: 'Overview', icon: faGripVertical },
  { link: '/dashboard/properties', name: 'Properties', icon: faHouse },
  { link: '/dashboard/tenants', name: 'Tenants', icon: faPeopleRoof },
  { link: '/dashboard/analytics', name: 'Analytics', icon: faChartLine }
];

const NavBar = () => {
  // Mapped links with same styling / format
  const regularLinksDisplay: React.JSX.Element[] = regularLinks.map(
    ({ link, name, icon }) => (
      <NavBarLink link={link} name={name} icon={icon} key={name} />
    )
  );

  return (
    <nav className='hidden md:flex flex-col order-first md:col-span-3 lg:col-span-2 xl:col-span-1 row-span-12 bg-orange-300 pt-2 text-slate-600 font-bold lg:max-w-56'>
      <ul className='flex flex-col grow'>
        <li className='self-center mb-6'>
          <Link href='/dashboard'>
            <Image src={logo} alt='property pal' priority={true} />
          </Link>
        </li>
        {regularLinksDisplay}
        <IssueLink />
        <MessageLink />
        <NavBarLink link='/dashboard/settings' name='Settings' icon={faGear} />
      </ul>
    </nav>
  );
};

export default NavBar;
