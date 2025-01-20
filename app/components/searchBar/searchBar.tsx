'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [focusClass, setFocusClass] = useState<string>(
    'border-white md:border-slate-200'
  );
  const [searchValue, setsearchValue] = useState<string>('');

  return (
    <div
      className={`flex bg-white w-40 sm:w-80 border-2 rounded-md items-center ${focusClass}`}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size='xs'
        className='px-1 text-slate-600'
      />
      <input
        type='text'
        placeholder='Find something'
        className='w-32 sm:w-auto rounded-r-md outline-none p-2'
        onFocus={() => {
          setFocusClass('border-slate-600 md:border-orange-300');
        }}
        onBlur={() => {
          setFocusClass('border-white md:border-slate-200');
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
