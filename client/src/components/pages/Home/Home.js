import NavBar from '../../NavBar';
import About from './About';
import Activity from './Activity';
import Hero from './Hero';

export default function Home() {
  return (
    <section>
      <NavBar />
      <Hero />
      <Activity />
      <About />
    </section>
  );
}
