import React from 'react';
import NotificationIcon from '@/components/notificationIcon';
import SettingsIcon from '@/components/settingsIcon';
import AddPropertyIcon from '@/components/addPropertyIcon';
import MessageIcon from '@/components/messgaeIcon';

const IconBar = () => {
  return (
    <ul className='flex justify-end w-80 pr-2'>
      <NotificationIcon />
      <MessageIcon />
      <SettingsIcon />
      <AddPropertyIcon />
    </ul>
  );
};

export default IconBar;
