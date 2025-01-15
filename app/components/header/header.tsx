import React from 'react';
import SearchBar from '@/components/searchBar';
import IconBar from '@/components/iconBar';
import Logo from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-orange-300 md:bg-slate-50 p-2 flex justify-between items-center md:col-span-8 xl:col-span-9 row-span-1'>
      <Link href='/' className='flex-none md:hidden'>
        <Image width={100} height={100} src={Logo} alt='property pal' />
      </Link>
      <SearchBar />
      <IconBar />
    </header>
  );
};

export default Header;
