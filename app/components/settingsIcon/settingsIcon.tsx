import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const SettingsIcon = () => {
  return (
    <li className='px-4 hover:scale-110 hover:opacity-80'>
      <span className='fa-layers'>
        <FontAwesomeIcon icon={faGear} size='2xl' className='text-slate-600' />
      </span>
    </li>
  );
};

export default SettingsIcon;
