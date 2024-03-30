import img1 from '../images/hero-bg1.jpg';
import img2 from '../images/pizza.jpg';
import img3 from '../images/f3.png';
import img4 from '../images/f4.png';
import img5 from '../images/f5.png';
import img6 from '../images/f6.png';
import img7 from '../images/f7.png';
import img8 from '../images/f8.png';
import img9 from '../images/f9.png';
import img10 from '../images/f2.png';

export const orders = [
  {
    id:1,
    image: img7,
    productName: 'Classic Burger',
    starRating: 4,
    price: '225',
    category:'burger'
  },
  {
    id:2,
    image: img8,
    productName: 'Cheeseburger',
    starRating: 4.5,
    price: '255',
    category:'burger'
  },
  {
    id:2,
    image: img10,
    productName: 'Bacon Burger',
    starRating: 4.2,
    price: '200',
    category:'burger'
  },
  {
    id:3,
    image: img7,
    productName: 'Veggie Burger',
    starRating: 4.1,
    price: '280',
    category:'burger'
  },
  {
    id:4,
    image: img3,
    productName: 'Margherita Pizza',
    starRating: 4.7,
    price: '345',
    category:'pizza'
  },
  {
    id:5,
    image: img6,
    productName: 'Pepperoni Pizza',
    starRating: 4.9,
    price: '400',
    category:'pizza'
  },
  {
    id:6,
    image: img4,
    productName: 'Spaghetti Carbonara',
    starRating: 4.3,
    price: '175',
    category:'pasta'
  },
  {
    id:7,
    image: img9,
    productName: 'Fettuccine Alfredo',
    starRating: 4.4,
    price: '145',
    category:'pasta'
  },
  {
    id:8,
    image: img5,
    productName: 'French Fries',
    starRating: 4.8,
    price: '140',
    category:'fries'
  },
];

export const offers = [
  {
    name: 'Tasty Thursdays',
    discount: '20%',
    imageSrc: img3,
  },
  {
    name: 'Pizza Days',
    discount: '15%',
    imageSrc: img6,
  },
  // Add more offers here...
];

export const slides = [
  {
    title: 'Delicious Burgers Just for You',
    description: 'Satisfy your cravings with our mouth-watering burgers made from the freshest ingredients.',
    link: '/burgers',
    buttonText: 'Order Now',
    image: img1,
  },
  {
    title: 'Tantalizing Sandwich Creations',
    description: 'Indulge in our wide selection of sandwiches, each crafted with love and topped with your favorite ingredients.',
    link: '/pizza',
    buttonText: 'Order Now',
    image: img2,
  },
  // Add more slides here...
];
