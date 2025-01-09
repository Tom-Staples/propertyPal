import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const SettingsIcon = () => {
  return (
    <li className='px-2 hover:scale-110 hover:opacity-80'>
      <FontAwesomeIcon icon={faGear} size='xl' className='text-slate-600' />
    </li>
  );
};

export default SettingsIcon;
