import React from 'react';
import SearchBar from '@/components/searchBar';
import IconBar from '@/components/iconBar';
import Logo from '@public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-orange-300 md:bg-slate-50 p-2 flex justify-between items-center md:col-span-9 lg:col-span-10 xl:col-span-9'>
      <Link href='/dashboard' className='md:hidden'>
        <Image
          src={Logo}
          alt='property pal'
          priority={true}
          className='h-full w-full'
        />
      </Link>
      <div className='hidden sm:block'>
        <SearchBar />
      </div>
      <IconBar />
    </header>
  );
};

export default Header;
