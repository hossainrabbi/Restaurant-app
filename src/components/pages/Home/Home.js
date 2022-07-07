import Layout from '../../Layout';
import About from './About';
import Activity from './Activity';
import Hero from './Hero';
import Menu from './Menu';
import Testimonial from './Testimonial/Testimonial';
import Work from './Work';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Activity />
      <About />
      <Work />
      <Menu />
      <Testimonial />
    </Layout>
  );
}
