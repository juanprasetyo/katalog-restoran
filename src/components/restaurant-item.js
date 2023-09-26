class RestaurantItem extends HTMLElement{
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
    this.innerHTML = `
      <article class="card">
        <picture>
          <img src="${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name}" loading="lazy" tabindex="0">
        </picture>
        <p class="label-city fw-semi-bold" tabindex="0" aria-label="Tempat di kota ${this._restaurant.city}">${this._restaurant.city}</p>
        <div class="card-body">
          <p class="rating fs-6 fw-extra-bold" tabindex="0" aria-label="Rating restaurant ${this._restaurant.rating}">
            <i class="bi bi-star-fill"></i>
            ${this._restaurant.rating}
          </p>
          <h3 class="title fs-6" tabindex="0">${this._restaurant.name}</h3>
          <p class="desc fs-8 fs-lg-7" tabindex="0">${this._restaurant.description}</p>
          <a href="#" class="btn fs-7 fw-semi-bold" tabindex="0">Detail</a>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);