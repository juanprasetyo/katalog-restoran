/* eslint-disable no-alert */
import '../components/button-like';
import '../components/button-unlike';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    this._likeButtonContainer.innerHTML = '';
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderUnlike();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await this._favoriteRestaurants.getDetail(id);
    return !!restaurant;
  },

  _renderLike() {
    const buttonLikeElement = document.createElement('button-like');
    this._likeButtonContainer.appendChild(buttonLikeElement);

    buttonLikeElement.addEventListener('click', async (event) => {
      event.stopPropagation();
      await this._favoriteRestaurants.put(this._restaurant);
      // alert('Berhasil menambahkan ke favorit!');
      await this._renderButton();
    });
  },

  _renderUnlike() {
    const buttonUnlikeElement = document.createElement('button-unlike');
    this._likeButtonContainer.appendChild(buttonUnlikeElement);

    buttonUnlikeElement.addEventListener('click', async (event) => {
      event.stopPropagation();
      await this._favoriteRestaurants.delete(this._restaurant.id);
      // alert('Berhasil menghapus dari favorit!');
      await this._renderButton();
    });
  },

};

export default LikeButtonPresenter;
