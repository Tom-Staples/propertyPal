import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircle } from '@fortawesome/free-solid-svg-icons';

const NotificationIcon = () => {
  return (
    <li className='px-2 hover:scale-110 hover:opacity-80'>
      <span className='fa-layers'>
        <FontAwesomeIcon
          icon={faBell}
          size='xl'
          className='text-slate-600'
          title='Test'
        />
        <FontAwesomeIcon
          icon={faCircle}
          size='xs'
          className='text-red-600'
          transform='shrink-4 right-10 up-6'
        />
      </span>
    </li>
  );
};

export default NotificationIcon;
