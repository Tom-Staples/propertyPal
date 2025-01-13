import Header from '@/components/header/header';
import NavBar from '@/components/navBar';

export default function Home() {
  return (
    <div className='grid grid-rows-2 grid-cols-10'>
      <Header />
      <NavBar />
    </div>
  );
}
