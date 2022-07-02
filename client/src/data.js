import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

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
    activity: '10:00am - 7:00pm',
    title: 'Working hours',
    icon: FaClock,
  },
  {
    activity: 'Velyka Vasylkivska 100',
    title: 'Get Directions',
    icon: IoLocationSharp,
  },
  {
    activity: '+38(063)8332415',
    title: 'Call Online',
    icon: FaPhoneAlt,
  },
];
