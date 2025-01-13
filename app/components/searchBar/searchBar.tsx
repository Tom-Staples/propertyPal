'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [focusClass, setFocusClass] = useState<string>('border-slate-200');
  const [searchValue, setsearchValue] = useState<string>('');

  return (
    <div className={`w-80 rounded-md border-2 flex items-center ${focusClass}`}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size='xs'
        className='grow-0 px-1 text-slate-600'
      />
      <input
        type='text'
        placeholder='Find something'
        className=' grow rounded-r-md outline-none p-2'
        onFocus={() => {
          setFocusClass('border-orange-300');
        }}
        onBlur={() => {
          setFocusClass('border-slate-200');
        }}
        onChange={e => {
          setsearchValue(e.target.value);
        }}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
