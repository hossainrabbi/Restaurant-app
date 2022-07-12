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
import ASHIQ from './images/testimonial/ashiq.jpg';
import RAKIB from './images/testimonial/rakib.jpg';
import ROHAN from './images/testimonial/rohan.jpg';

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
    id: '1',
    name: 'Rose Muffen',
    title: 'Served with french fries + drink',
    description: [
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
        assumenda, quam non distinctio harum temporibus, dolor quo beatae!
        Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
        tempore minus dolores tempora magnam, soluta minima ex similique
        deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
        cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
        enim, molestiae eveniet tenetur minus reprehenderit, molestias
        adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
        numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
        doloremque quia incidunt, dolores at ipsa itaque tempore minus
        asperiores vitae ea.`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
        laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
        enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
        sapiente quis impedit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
        cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
        deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
        dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
        quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
        ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
        exercitationem magni earum atque nesciunt?`,
    ],
    price: 12,
    inStock: 5,
    image: MENU_1,
  },
  {
    id: '2',
    name: 'Pan Cake',
    title: 'Served with french fries + drink',
    description: [
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
        assumenda, quam non distinctio harum temporibus, dolor quo beatae!
        Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
        tempore minus dolores tempora magnam, soluta minima ex similique
        deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
        cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
        enim, molestiae eveniet tenetur minus reprehenderit, molestias
        adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
        numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
        doloremque quia incidunt, dolores at ipsa itaque tempore minus
        asperiores vitae ea.`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
        laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
        enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
        sapiente quis impedit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
        cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
        deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
        dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
        quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
        ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
        exercitationem magni earum atque nesciunt?`,
    ],
    price: 15,
    inStock: 1,
    image: MENU_2,
  },
  {
    id: '3',
    name: 'Egg Muffen',
    title: 'Served with french fries + drink',
    description: [
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
        assumenda, quam non distinctio harum temporibus, dolor quo beatae!
        Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
        tempore minus dolores tempora magnam, soluta minima ex similique
        deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
        cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
        enim, molestiae eveniet tenetur minus reprehenderit, molestias
        adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
        numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
        doloremque quia incidunt, dolores at ipsa itaque tempore minus
        asperiores vitae ea.`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
        laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
        enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
        sapiente quis impedit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
        cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
        deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
        dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
        quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
        ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
        exercitationem magni earum atque nesciunt?`,
    ],
    price: 12,
    inStock: 9,
    image: MENU_3,
  },
  {
    id: ' 4',
    name: 'Salads',
    title: 'Served with french fries + drink',
    description: [
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
        assumenda, quam non distinctio harum temporibus, dolor quo beatae!
        Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
        tempore minus dolores tempora magnam, soluta minima ex similique
        deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
        cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
        enim, molestiae eveniet tenetur minus reprehenderit, molestias
        adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
        numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
        doloremque quia incidunt, dolores at ipsa itaque tempore minus
        asperiores vitae ea.`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
        laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
        enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
        sapiente quis impedit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
        cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
        deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
        dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
        quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
        ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
        exercitationem magni earum atque nesciunt?`,
    ],
    price: 12,
    ratting: 5,
    image: MENU_4,
  },
  {
    id: '5',
    name: 'Egg Masala',
    title: 'Served with french fries + drink',
    description: [
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
        assumenda, quam non distinctio harum temporibus, dolor quo beatae!
        Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
        tempore minus dolores tempora magnam, soluta minima ex similique
        deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
        cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
        enim, molestiae eveniet tenetur minus reprehenderit, molestias
        adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
        numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
        doloremque quia incidunt, dolores at ipsa itaque tempore minus
        asperiores vitae ea.`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
        laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
        enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
        sapiente quis impedit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
        cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
        deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
        dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
        quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
        ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
        exercitationem magni earum atque nesciunt?`,
    ],
    price: 13,
    inStock: 0,
    image: MENU_5,
  },
  {
    id: '6',
    name: 'Vegie Muffen',
    title: 'Served with french fries + drink',
    description: [
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem.',
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa sunt incidunt culpa atque reiciendis a nihil explicabo deserunt
        assumenda, quam non distinctio harum temporibus, dolor quo beatae!
        Corporis culpa, quo assumenda voluptate exercitationem, nihil quaerat
        tempore minus dolores tempora magnam, soluta minima ex similique
        deserunt nobis excepturi odio obcaecati recusandae delectus blanditiis
        cum veritatis sapiente perferendis. Accusantium, vitae delectus. Culpa
        enim, molestiae eveniet tenetur minus reprehenderit, molestias
        adipisci ex ab amet iste nobis cum fugit ipsam! Tenetur, pariatur
        numquam eveniet repellendus recusandae beatae quis, dolore qui saepe
        doloremque quia incidunt, dolores at ipsa itaque tempore minus
        asperiores vitae ea.`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
        laborum, ipsam asperiores maiores, fugiat beatae, hic fuga quas id
        enim architecto! Voluptatibus cum, odio nihil perspiciatis cumque
        sapiente quis impedit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
        cum odio obcaecati fuga! Atque dignissimos, fugiat alias libero
        deserunt dolorem quidem, eveniet tenetur sunt adipisci id doloremque
        dolor dolore eum esse suscipit magnam repellendus! Totam voluptate
        quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
        ullam beatae repellendus eius! Culpa harum sed impedit. Debitis
        exercitationem magni earum atque nesciunt?`,
    ],
    price: 12,
    inStock: 5,
    image: MENU_6,
  },
];

export const productReviewData = [
  {
    id: '1',
    userId: '1',
    menuId: '1',
    ratting: 3,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: '2',
    userId: '2',
    menuId: '1',
    ratting: 5,
    review: `Perspiciatis
    at autem, est ratione soluta, minus nobis, qui fugit rerum doloremque
    cum odio obcaecati fuga`,
  },
  {
    id: '3',
    userId: '3',
    menuId: '2',
    ratting: 2,
    review: `Totam voluptate
    quasi eligendi vel rerum quas voluptatibus placeat eaque, nesciunt
    ullam beatae repellendus eius`,
  },
];

export const testimonialData = [
  {
    id: 1,
    name: 'Ashiq Hossain',
    title: 'Java Developer',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at repudiandae vitae suscipit! Perspiciatis totam enim provident ea quaerat consectetur.',
    rating: 5,
    image: ASHIQ,
  },
  {
    id: 2,
    name: 'Rohan Hossain',
    title: 'Cyber Security Expart',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at repudiandae vitae suscipit! Perspiciatis totam enim provident ea quaerat consectetur.',
    rating: 3,
    image: ROHAN,
  },
  {
    id: 3,
    name: 'Rakib Islam',
    title: 'Web Developer',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at repudiandae vitae suscipit! Perspiciatis totam enim provident ea quaerat consectetur.',
    rating: 4,
    image: RAKIB,
  },
];
