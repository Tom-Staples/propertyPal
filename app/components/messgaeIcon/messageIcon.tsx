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
      spinner: 'right-6 up-4',
      exclamation: 'right-6 up-4',
      circle: 'shrink-4 right-20 up-14'
    },
    count,
    derivedCountDisplayValue
  );

  return (
    <span className='fa-layers'>
      <FontAwesomeIcon icon={faMessage} size='xl' className='text-slate-600' />
      {overlay}
      <NotificationCounter
        styleMap={[
          '',
          'text-md left-2 -bottom-0.5',
          'text-sm left-1 bottom-0',
          'text-[11px] left-0.5 bottom-0.5',
          'text-[9px] left-0.5 bottom-0.5'
        ]}
        count={derivedCountDisplayValue}
      />
    </span>
  );
};

export default MessageIcon;
