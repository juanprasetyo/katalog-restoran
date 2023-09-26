import 'regenerator-runtime'; /* for async await transpile */
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.scss';
import './components/restaurant-list';

const navbarToggleElement = document.querySelector('.navbar-toggle');
const navbarNavElement = document.querySelector('.navbar-nav');
const mainElement = document.querySelector('main');

navbarToggleElement.addEventListener('click', (event) => {
  event.stopPropagation();
  navbarNavElement.classList.toggle('show');
})

mainElement.addEventListener('click', (event) => {
  event.stopPropagation();
  navbarNavElement.classList.remove('show');
})

const data = require('../public/data/DATA.json');
const restaurants = data.restaurants;


const restaurantListElement = document.createElement('restaurant-list');
restaurantListElement.restaurants = restaurants;
mainElement.appendChild(restaurantListElement);
