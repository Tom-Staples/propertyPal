'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import useGetNotificationCounter from 'hooks/useGetNotificationCounter';
import getIconOverlay from 'helpers/getIconOverlay';
import isLinkActive from 'helpers/isLinkActive';

interface MessageStyle {
  spinner: string;
  exclamation: string;
  circle: string;
}

// Static variables
const link: string = '/dashboard/messages';
const messageStyle: MessageStyle = {
  spinner: 'right-10 up-4',
  exclamation: 'right-10 up-4',
  circle: 'shrink-4 right-20 up-14'
};

const MessageLink = ({
  setSideBarState = null
}: {
  setSideBarState?: React.Dispatch<React.SetStateAction<boolean>> | null;
}) => {
  const currentPath: string = usePathname();
  const linkActive: boolean = isLinkActive(currentPath, link);
  const messageCount: number | null = useGetNotificationCounter(
    'https://fakeData.com/fakeroutenotifs'
  );
  const derivedMessageCountDisplayValue: string =
    !messageCount || messageCount === -1 ? '' : messageCount.toString();
  const messageOverlay: React.JSX.Element | undefined = getIconOverlay(
    messageStyle,
    messageCount,
    derivedMessageCountDisplayValue,
    'text-white'
  );

  return (
    <Link
      href={link}
      onClick={() => {
        if (setSideBarState) {
          setSideBarState(false);
        }
      }}
    >
      <li
        className={`${
          linkActive && 'bg-slate-50'
        } py-2 md:py-4 my-2 md:my-0 mr-6 md:mr-0 md:mb-2 pl-2 md:pl-1 md:hover:scale-105 md:hover:bg-orange-200 rounded-r-lg md:rounded-r-none md:rounded-l-lg`}
      >
        <span className='fa-layers'>
          <FontAwesomeIcon
            icon={faMessage}
            size='xl'
            className='mr-2 text-slate-600 w-8'
          />
          {messageOverlay}
        </span>
        <span className='ml-6 md:ml-4 xl:ml-4'>Messages</span>
        <span
          className={`${
            !derivedMessageCountDisplayValue && 'hidden'
          } p-[5px] ml-2 xl:ml-1 text-sm text-white bg-slate-600 rounded-full`}
        >
          {derivedMessageCountDisplayValue}
        </span>
      </li>
    </Link>
  );
};

export default MessageLink;
