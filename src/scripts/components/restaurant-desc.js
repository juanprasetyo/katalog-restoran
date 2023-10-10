import CONFIG from '../globals/config';

class RestaurantDescription extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="row">
        <div class="col-12">
          <div class="card-detail">
            <h1 class="fs-1" tabindex="0">${this._restaurant.name}</h1>
            <div class="row">
              <div class="col-12 col-lg-6">
                <p tabindex="0">${this._restaurant.description}</p>
              </div>
              <picture class="col-12 col-lg-6">
                <source media="(min-width:576px)" srcset="${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}">
                <source media="(min-width:768px)" srcset="${CONFIG.BASE_IMAGE_URL}medium/${this._restaurant.pictureId}">
                <source media="(min-width:992px)" srcset="${CONFIG.BASE_IMAGE_URL}large/${this._restaurant.pictureId}">
                <img src="${CONFIG.BASE_IMAGE_URL}medium/${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name}" loading="lazy" tabindex="0">
              </picture>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-desc', RestaurantDescription);
