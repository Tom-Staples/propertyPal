import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';

const AddPropertyIcon = () => {
  return (
    <span className='fa-layers'>
      <FontAwesomeIcon
        icon={faHouseMedical}
        size='xl'
        className='text-slate-600'
      />
    </span>
  );
};

export default AddPropertyIcon;
