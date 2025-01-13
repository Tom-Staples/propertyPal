import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const SettingsIcon = () => {
  return (
    <span className='fa-layers'>
      <FontAwesomeIcon icon={faGear} size='2xl' className='text-slate-600' />
    </span>
  );
};

export default SettingsIcon;
