import NavBar from '../../NavBar';
import About from './About';
import Activity from './Activity';
import Hero from './Hero';
import Work from './Work';

export default function Home() {
  return (
    <section>
      <NavBar />
      <Hero />
      <Activity />
      <About />
      <Work />
    </section>
  );
}
