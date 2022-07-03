import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import CHICKEN from './images/chicken-leg.png';
import DELIVERY from './images/delivery-truck.png';
import TAP from './images/tap.png';

export const navData = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Package',
    url: '/package',
  },
  {
    name: 'About us',
    url: '/about',
  },
  {
    name: 'Contact us',
    url: '/contact',
  },
];

export const activityData = [
  {
    name: '10:00am - 7:00pm',
    description: 'Working hours',
    icon: FaClock,
  },
  {
    name: 'Velyka Vasylkivska 100',
    description: 'Get Directions',
    icon: IoLocationSharp,
  },
  {
    name: '+38(063)8332415',
    description: 'Call Online',
    icon: FaPhoneAlt,
  },
];

export const workData = [
  {
    name: 'Pick Meals',
    description:
      'Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.',
    image: CHICKEN,
  },
  {
    name: 'Choose How Often',
    description:
      'Our team of chefs do the prep work no more chopping, measuring, or sink full of dishes!',
    image: TAP,
  },
  {
    name: 'Fast Deliveries',
    description:
      'Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.',
    image: DELIVERY,
  },
];
