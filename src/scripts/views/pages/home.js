import '../../components/restaurant-list';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <section id="hero">
        <picture>
          <source media="(max-width: 576px)" type="image/webp" class="lazyload" data-srcset="./images/hero-image_2-sm.webp">
          <source media="(max-width: 576px)" type="image/jpeg" class="lazyload" data-srcset="./images/hero-image_2-sm.jpg">
          <source media="(max-width: 768px)" type="image/webp" class="lazyload" data-srcset="./images/hero-image_2-md.webp">
          <source media="(max-width: 768px)" type="image/jpeg" class="lazyload" data-srcset="./images/hero-image_2-md.jpg">
          <source media="(max-width: 992px)" type="image/webp" class="lazyload" data-srcset="./images/hero-image_2-lg.webp">
          <source media="(max-width: 992px)" type="image/jpeg" class="lazyload" data-srcset="./images/hero-image_2-lg.jpg">
          <source media="(max-width: 1200px)" type="image/webp" class="lazyload" data-srcset="./images/hero-image_2-xl.webp">
          <source media="(max-width: 1200px)" type="image/jpeg" class="lazyload" data-srcset="./images/hero-image_2-xl.jpg">
          <img class="lazyload" data-src="./images/heros/hero-image_2.jpg" alt="">
        </picture>
        <h1 class="fs-3 fs-md-2 fs-lg-1 fw-bold text-center">Jelajahi seluruh restoran terbaik di seluruh Indonesia.</h1>
      </section>
      <div class="container list-restaurants">
        <div class="row template-skeleton">
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
    const listRestaurantsContainer = document.querySelector('.list-restaurants');
    const restaurantListElement = document.createElement('restaurant-list');
    const restaurants = await RestaurantSource.list();

    if (restaurants.length > 0) {
      const templateSkeleton = document.querySelector('.template-skeleton');
      templateSkeleton.classList.toggle('hidden');
      restaurantListElement.restaurants = await restaurants;
      listRestaurantsContainer.appendChild(restaurantListElement);
    }
  },
};

export default Home;
