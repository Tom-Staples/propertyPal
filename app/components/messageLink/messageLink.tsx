'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import useGetNotificationCounter from 'hooks/useGetNotificationCounter';
import getIconOverlay from 'helpers/getIconOverlay';

const MessageLink = () => {
  const currentPath: string = usePathname();
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

  return (
    <Link href='messages'>
      <li
        className={`${
          currentPath === '/messages' && 'bg-slate-50 rounded-l-lg'
        } py-4 mb-2 pl-1 hover:scale-105 hover:bg-orange-200 rounded-l-lg`}
      >
        <span className='fa-layers'>
          <FontAwesomeIcon
            icon={faMessage}
            size='xl'
            className='mr-2 text-slate-600 w-8'
          />
          {messageOverlay}
        </span>
        <span className='ml-4 xl:ml-4'>Messages</span>
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
