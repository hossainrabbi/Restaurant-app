import Footer from '../../Footer';
import NavBar from '../../NavBar';
import About from './About';
import Activity from './Activity';
import Hero from './Hero';
import Menu from './Menu';
import Testimonial from './Testimonial';
import Work from './Work';

export default function Home() {
  return (
    <section>
      <NavBar />
      <Hero />
      <Activity />
      <About />
      <Work />
      <Menu />
      <Testimonial />
      <Footer />
    </section>
  );
}
