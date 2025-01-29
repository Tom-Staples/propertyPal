'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchValue, setsearchValue] = useState<string>('');

  return (
    <div className='flex bg-white w-40 sm:w-80 border-2 rounded-md items-center border-white md:border-slate-200 focus-within:border-slate-600 focus-within:md:border-orange-300'>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size='xs'
        className='px-1 text-slate-600'
      />
      <input
        type='text'
        placeholder='Find something'
        className='w-32 text-sm sm:text-base sm:w-auto rounded-r-md outline-none p-2'
        onChange={e => {
          setsearchValue(e.target.value);
        }}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
