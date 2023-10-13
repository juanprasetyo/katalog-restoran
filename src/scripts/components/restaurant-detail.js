class RestaurantDetail extends HTMLElement {
  constructor() {
    super();
    this._restaurant = {
      address: '',
      city: '',
      rating: '',
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
          <div class="col-12 col-lg-8">
            <div class="card-detail">
              <h2 tabindex="0">Daftar Menu</h2>
              <div class="row">
                <div class="col-12 col-md-6">
                  <h3 tabindex="0">Makanan</h3>
                  <ul class="list-food" tabindex="0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div class="col-12 col-md-6">
                  <h3 tabindex="0">Minuman</h3>
                  <ul class="list-drink" tabindex="0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card-detail">
              <h2 tabindex="0">Informasi</h2>
              <div class="row">
                <div class="col-12">
                  <ol class="list-info-resto">
                    <li>
                      <h3 tabindex="0">Alamat</h3>
                      <p tabindex="0">${this._restaurant.address}</p>
                    </li>
                    <li>
                      <h3 tabindex="0">Kota</h3>
                      <p tabindex="0">${this._restaurant.city}</p>
                    </li>
                    <li>
                      <h3 tabindex="0">Rating</h3>
                      <p tabindex="0"><i class="bi bi-star-fill"></i>${this._restaurant.rating}</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const cardDetailElements = this.querySelectorAll('.card-detail');
    cardDetailElements.forEach((cardDetailElement) => {
      cardDetailElement.classList.add('skeleton');
    });

    // eslint-disable-next-line max-len
    if (this._restaurant.address && this._restaurant.city && this._restaurant.rating && this._restaurant.menus) {
      cardDetailElements.forEach((cardDetailElement) => {
        cardDetailElement.classList.remove('skeleton');
      });

      const menu = this._restaurant.menus;
      const { foods } = menu;
      const listFoodContainer = this.querySelector('.list-food');
      listFoodContainer.innerHTML = '';
      foods.forEach((food) => {
        const foodItem = document.createElement('li');
        foodItem.innerText = food.name;
        listFoodContainer.appendChild(foodItem);
      });

      const { drinks } = menu;
      const listDrinkContainer = this.querySelector('.list-drink');
      listDrinkContainer.innerHTML = '';
      drinks.forEach((drink) => {
        const drinkItem = document.createElement('li');
        drinkItem.innerText = drink.name;
        listDrinkContainer.appendChild(drinkItem);
      });
    }
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
