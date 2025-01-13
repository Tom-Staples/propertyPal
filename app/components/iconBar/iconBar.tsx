import React from 'react';
import NotificationIcon from '@/components/notificationIcon';
import SettingsIcon from '@/components/settingsIcon';
import AddPropertyIcon from '@/components/addPropertyIcon';
import MessageIcon from '@/components/messgaeIcon';

const IconBar = () => {
  const listStyling = 'px-4 hover:scale-110 hover:opacity-80';

  return (
    <ul className='flex justify-end w-80 pr-2'>
      <li className={listStyling}>
        <NotificationIcon />
      </li>
      <li className={listStyling}>
        <MessageIcon />
      </li>
      <li className={listStyling}>
        <SettingsIcon />
      </li>
      <li className={listStyling}>
        <AddPropertyIcon />
      </li>
    </ul>
  );
};

export default IconBar;
