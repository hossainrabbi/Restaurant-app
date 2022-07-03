import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import CHICKEN from './images/chicken-leg.png';
import DELIVERY from './images/delivery-truck.png';
import MENU_1 from './images/menu/menu-1.jpg';
import MENU_2 from './images/menu/menu-2.jpg';
import MENU_3 from './images/menu/menu-3.jpg';
import MENU_4 from './images/menu/menu-4.jpg';
import MENU_5 from './images/menu/menu-5.jpg';
import MENU_6 from './images/menu/menu-6.jpg';
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

export const menuData = [
  {
    id: 1,
    name: 'Rose Muffen',
    title: 'Served with french fries + drink',
    description:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
    price: 12,
    review: 5,
    numOfReview: 3,
    image: MENU_1,
  },
  {
    id: 2,
    name: 'Pan Cake',
    title: 'Served with french fries + drink',
    description:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
    price: 15,
    review: 3,
    numOfReview: 2,
    image: MENU_2,
  },
  {
    id: 3,
    name: 'Egg Muffen',
    title: 'Served with french fries + drink',
    description:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
    price: 12,
    review: 2,
    numOfReview: 3,
    image: MENU_3,
  },
  {
    id: 4,
    name: 'Salads',
    title: 'Served with french fries + drink',
    description:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
    price: 12,
    review: 5,
    numOfReview: 3,
    image: MENU_4,
  },
  {
    id: 5,
    name: 'Egg Masala',
    title: 'Served with french fries + drink',
    description:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
    price: 13,
    review: 5,
    numOfReview: 1,
    image: MENU_5,
  },
  {
    id: 6,
    name: 'Vegie Muffen',
    title: 'Served with french fries + drink',
    description:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
    price: 12,
    review: 4,
    numOfReview: 3,
    image: MENU_6,
  },
];
