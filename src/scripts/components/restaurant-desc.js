import CONFIG from '../globals/config';

class RestaurantDescription extends HTMLElement {
  constructor() {
    super();
    this._restaurant = {
      name: '',
      pictureId: '',
      description: '',
    };
  }

  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container pb-0">
        <div class="row template-skeleton">
          <div class="col-12">
            <div class="card-detail">
              <h1 class="fs-1" tabindex="0">${this._restaurant.name}</h1>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <p tabindex="0">${this._restaurant.description}</p>
                </div>
                <picture class="col-12 col-lg-6">
                  <img src="#">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const cardDetailElement = this.querySelector('.card-detail');
    cardDetailElement.classList.add('skeleton');

    if (this._restaurant.name && this._restaurant.description && this._restaurant.pictureId) {
      cardDetailElement.classList.remove('skeleton');

      const pictureElement = cardDetailElement.querySelector('picture');
      pictureElement.innerHTML = `
        <source media="(max-width: 576px)" srcset="${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}" loading="eager">
        <source media="(max-width: 768px)" srcset="${CONFIG.BASE_IMAGE_URL}medium/${this._restaurant.pictureId}" loading="eager">
        <source media="(max-width: 992px)" srcset="${CONFIG.BASE_IMAGE_URL}large/${this._restaurant.pictureId}" loading="eager">
        <img src="${CONFIG.BASE_IMAGE_URL}medium/${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name}" loading="eager" tabindex="0">
      `;
    }
  }
}

customElements.define('restaurant-desc', RestaurantDescription);
