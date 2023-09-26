import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="container">
        <h2 class="fs-5 fs-md-4 fs-lg-3 fw-bold text-center" style="margin-bottom: 1.25rem" tabindex="0">Explore Restoran</h2>
        <div class="row"></div>
      </section>   
    `;

    const listRestoContainer = this.querySelector('div');
    this._restaurants.forEach(restaurant => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;
      listRestoContainer.appendChild(restaurantElement);
    })
  }
}

customElements.define('restaurant-list', RestaurantList);