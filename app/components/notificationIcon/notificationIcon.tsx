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
      spinner: 'right-3 up-1',
      exclamation: 'right-4 up-1',
      circle: 'shrink-6 right-11 up-10'
    },
    count,
    derivedCountDisplayValue
  );

  return (
    <span className='fa-layers'>
      <FontAwesomeIcon icon={faBell} size='xl' className='text-slate-600' />
      {overlay}
      <NotificationCounter
        styleMap={[
          '',
          'text-sm left-1.5 -bottom-0.5',
          'text-[12px] left-1 -bottom-0.5',
          'text-[10px] left-0.5 -bottom-0.5',
          'text-[8px] left-0.5 -bottom-0.5'
        ]}
        count={derivedCountDisplayValue}
      />
    </span>
  );
};

export default NotificationIcon;
