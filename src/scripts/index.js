import 'regenerator-runtime'; /* for async await transpile */
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.scss';

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
