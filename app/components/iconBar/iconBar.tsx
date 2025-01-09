import React from 'react';
import NotificationIcon from '@/components/notificationIcon/notificationIcon';
import SettingsIcon from '@/components/settingsIcon/settingsIcon';
import AddPropertyIcon from '@/components/addPropertyIcon/addPropertyIcon';
import MessageIcon from '@/components/messgaeIcon/messageIcon';

const IconBar = () => {
  return (
    <ul className='flex justify-end w-80'>
      <NotificationIcon />
      <MessageIcon />
      <SettingsIcon />
      <AddPropertyIcon />
    </ul>
  );
};

export default IconBar;
