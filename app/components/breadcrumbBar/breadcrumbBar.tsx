'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const BreadcrumbBar = () => {
  const currentPath: string = usePathname();
  const breadCrumbs: string[] = currentPath.split('/');
  breadCrumbs.shift();
  const breadCrumbLinks: React.JSX.Element[] = breadCrumbs.map((bc, index) => {
    const previousCrumbs: string = breadCrumbs.slice(0, index).join('/');
    const isDashboard: boolean = bc === 'dashboard';
    const capitalizedCrumb: string = bc
      .split('-')
      .map(link => link.substring(0, 1).toUpperCase() + link.substring(1))
      .join(' ');
    return (
      <li key={bc} className='mr-2'>
        <Link href={`/${previousCrumbs ? `${previousCrumbs}/${bc}` : bc}`}>
          {isDashboard ? 'Overview' : capitalizedCrumb}
        </Link>
        <span className='text-slate-600'>{`${
          index === breadCrumbs.length - 1 ? '' : ' > '
        }`}</span>
      </li>
    );
  });

  return (
    <ol className='flex flex-row text-blue-400 font-bold md:text-lg'>
      {breadCrumbLinks}
    </ol>
  );
};

export default BreadcrumbBar;
