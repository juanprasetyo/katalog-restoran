import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="container">
        <h2 class="fs-5 fw-bold text-center" tabindex="0">Explore Restoran</h2>
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