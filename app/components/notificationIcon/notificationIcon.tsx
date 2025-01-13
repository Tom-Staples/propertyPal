'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import NotificationCounter from '@/components/notificationCounter';
import useGetNotificationCounter from 'hooks/useGetNotificationCounter';
import getIconOverlay from 'helpers/getIconOverlay';

const NotificationIcon = () => {
  const count: number | null = useGetNotificationCounter(
    'https://fakeapi.com/fakeroute'
  );
  const derivedCountDisplayValue: string =
    !count || count === -1 ? '' : count.toString();
  const overlay: React.JSX.Element | undefined = getIconOverlay(
    {
      spinner: 'right-8 up-2',
      exclamation: 'right-8 up-2',
      circle: 'shrink-2 right-18 up-12'
    },
    count,
    derivedCountDisplayValue
  );

  return (
    <li className='px-4 hover:scale-110 hover:opacity-80'>
      <span className='fa-layers'>
        <FontAwesomeIcon icon={faBell} size='2xl' className='text-slate-600' />
        {overlay}
        <NotificationCounter
          styleMap={[
            '',
            'text-sm left-2.5 -bottom-1',
            'text-sm left-1.5 -bottom-1',
            'text-xs left-1 -bottom-1',
            'text-[9px] left-1 -bottom-1'
          ]}
          count={derivedCountDisplayValue}
        />
      </span>
    </li>
  );
};

export default NotificationIcon;
