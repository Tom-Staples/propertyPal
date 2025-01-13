import React from 'react';
import SearchBar from '@/components/searchBar';
import IconBar from '@/components/iconBar';

const Header = () => {
  return (
    <header className='h-16 border-b-2 border-slate-200 p-2 flex justify-between items-center'>
      <SearchBar />
      <IconBar />
    </header>
  );
};

export default Header;
