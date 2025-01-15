'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  return (
    <button>
      <FontAwesomeIcon size='2xl' icon={faBars} />
    </button>
  );
};

export default HamburgerMenu;
