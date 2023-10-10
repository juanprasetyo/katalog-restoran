import '../../components/restaurant-list';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
      <section class="container title"></section>
    `;
  },

  async afterRender() {
    const mainElement = document.querySelector('#main');
    const restaurants = await FavoriteRestoIdb.getAll();
    if (restaurants.length > 0) {
      const restaurantListElement = document.createElement('restaurant-list');
      restaurantListElement.restaurants = await restaurants;
      restaurantListElement.title = 'List Restoran Favorit Anda';
      mainElement.appendChild(restaurantListElement);
    } else {
      const titleContainer = document.querySelector('.title');
      const titleElement = document.createElement('h2');
      titleElement.classList.add('text-center');
      titleElement.innerText = 'Tidak Ada Restoran Favorit Anda';
      titleContainer.appendChild(titleElement);
    }
  },
};

export default Favorite;
