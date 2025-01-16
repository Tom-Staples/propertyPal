'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import useGetNotificationCounter from 'hooks/useGetNotificationCounter';
import getIconOverlay from 'helpers/getIconOverlay';

const IssueLink = () => {
  const currentPath: string = usePathname();
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

  return (
    <Link href='issues'>
      <li
        className={`${
          currentPath === '/issues' && 'bg-slate-50 rounded-l-lg'
        } py-4 mb-2 pl-1 hover:scale-105 hover:bg-orange-200 rounded-l-lg`}
      >
        <span className='fa-layers'>
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            size='xl'
            className='mr-2 text-slate-600 w-8'
          />
          {issueOverlay}
        </span>
        <span className='ml-6'>Issues</span>
        <span
          className={`${
            !derivedIssueDisplayValue && 'hidden'
          } p-[5px] ml-7 xl:ml-6 text-sm text-white bg-slate-600 rounded-full`}
        >
          {derivedIssueDisplayValue}
        </span>
      </li>
    </Link>
  );
};

export default IssueLink;
