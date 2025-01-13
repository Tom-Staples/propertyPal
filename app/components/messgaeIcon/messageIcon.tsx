'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import NotificationCounter from '@/components/notificationCounter';
import useGetNotificationCounter from 'hooks/useGetNotificationCounter';
import getIconOverlay from 'helpers/getIconOverlay';

const MessageIcon = () => {
  const count: number | null = useGetNotificationCounter(
    'https://fakeData.com/fakeroute'
  );
  const derivedCountDisplayValue: string =
    !count || count === -1 ? '' : count.toString();
  const overlay: React.JSX.Element | undefined = getIconOverlay(
    {
      spinner: 'right-12 up-6',
      exclamation: 'right-11 up-4',
      circle: 'shrink-2 right-26 up-18'
    },
    count,
    derivedCountDisplayValue
  );

  return (
    <span className='fa-layers'>
      <FontAwesomeIcon icon={faMessage} size='2xl' className='text-slate-600' />
      {overlay}
      <NotificationCounter
        styleMap={[
          '',
          'text-sm left-3 bottom-0.5',
          'text-sm left-2 bottom-0',
          'text-xs left-1.5 bottom-0.5',
          'text-xs left-0.5 bottom-0.5'
        ]}
        count={derivedCountDisplayValue}
      />
    </span>
  );
};

export default MessageIcon;
