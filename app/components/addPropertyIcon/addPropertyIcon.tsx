import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';

const AddPropertyIcon = () => {
  return (
    <li className='px-2 hover:scale-110 hover:opacity-80'>
      <FontAwesomeIcon
        icon={faHouseMedical}
        size='xl'
        className='text-slate-600'
      />
    </li>
  );
};

export default AddPropertyIcon;
