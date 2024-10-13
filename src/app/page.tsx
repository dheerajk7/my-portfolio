import Experience from '@components/Experience';
import HomeComponent from '@components/Home';
import About from '@components/About';

function Home() {
  return (
    <div className="">
      <div className='h-[60px]' />
      <HomeComponent />
      <Experience />
      <About />
    </div>
  );
}

export default Home;