import React from 'react';
import SearchBar from '@/components/searchBar';
import IconBar from '@/components/iconBar';

const Header = () => {
  return (
    <header className='h-16 p-2 flex justify-between items-center col-span-9'>
      <SearchBar />
      <IconBar />
    </header>
  );
};

export default Header;
