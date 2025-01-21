import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <main>
        <Link href='/dashboard'>Go to dashboard</Link>
      </main>
    </>
  );
};

export default HomePage;
