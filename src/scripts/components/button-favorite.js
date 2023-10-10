/* eslint-disable no-alert */
import FavoriteRestoIdb from '../data/favorite-resto-idb';

class ButtonFavorite extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  async render() {
    this.classList.add('btn-like-container');
    const { id } = this._restaurant;
    const restaurant = await this._isRestoExist(id);

    if (restaurant) {
      this._renderUnlikeButton();
    } else {
      this._renderLikeButton();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async _isRestoExist(id) {
    const restaurant = await FavoriteRestoIdb.getDetail(id);
    return !!restaurant;
  }

  _renderLikeButton() {
    this.innerHTML = `
      <button class="btn-like" aria-label="Tambahkan ke Favorit">
        <i class="bi bi-heart"></i>
      </button>
    `;

    const buttonLikeElement = this.querySelector('.btn-like');
    buttonLikeElement.addEventListener('click', async (event) => {
      event.stopPropagation();
      await FavoriteRestoIdb.put(this._restaurant);
      alert('Berhasil menambahkan ke favorit!');
      await this.render();
    });
  }

  _renderUnlikeButton() {
    this.innerHTML = `
      <button class="btn-unlike" aria-label="Hapus dari Favorit">
        <i class="bi bi-heart-fill"></i>
      </button>
    `;

    const buttonLikeElement = this.querySelector('.btn-unlike');
    buttonLikeElement.addEventListener('click', async (event) => {
      event.stopPropagation();
      await FavoriteRestoIdb.delete(this._restaurant.id);
      alert('Berhasil menghapus dari favorit!');
      await this.render();
    });
  }
}

customElements.define('button-favorite', ButtonFavorite);
