import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faCircle } from '@fortawesome/free-solid-svg-icons';

const MessageIcon = () => {
  return (
    <li className='px-2 hover:scale-110 hover:opacity-80'>
      <span className='fa-layers'>
        <FontAwesomeIcon
          icon={faMessage}
          size='xl'
          className='text-slate-600'
          title='Test'
        />
        <FontAwesomeIcon
          icon={faCircle}
          size='xs'
          className='text-green-400'
          transform='shrink-4 right-18 up-14'
        />
      </span>
    </li>
  );
};

export default MessageIcon;
