import '../../components/restaurant-list';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <section id="hero">
        <h1 class="fs-3 fs-md-2 fs-lg-1 fw-bold text-center">Jelajahi seluruh restoran terbaik di seluruh Indonesia.</h1>
      </section>
      <div class="container template-skeleton">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div id="skeleton" class="card-skeleton"></div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div id="skeleton" class="card-skeleton"></div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div id="skeleton" class="card-skeleton"></div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div id="skeleton" class="card-skeleton"></div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const mainElement = document.querySelector('#main');
    const restaurantListElement = document.createElement('restaurant-list');
    const restaurants = await RestaurantSource.list();

    if (restaurants.length > 0) {
      const templateSkeleton = document.querySelector('.template-skeleton');
      templateSkeleton.classList.toggle('hidden');
      restaurantListElement.restaurants = await restaurants;
      mainElement.appendChild(restaurantListElement);
    }
  },
};

export default Home;
