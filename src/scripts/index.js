/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime'; /* for async await transpile */
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('.navbar-toggle'),
  drawer: document.querySelector('.navbar-nav'),
  content: document.querySelector('#main'),
});
document.addEventListener('DOMContentLoaded', () => {
  const buttonSkipToContent = document.querySelector('.skip-to-content');
  buttonSkipToContent.addEventListener('click', (event) => {
    event.preventDefault();
    const mainElement = document.querySelector('#main');
    mainElement.scrollIntoView();
  });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
