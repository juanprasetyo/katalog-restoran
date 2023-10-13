import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import '../../components/restaurant-desc';
import '../../components/restaurant-detail';
import '../../components/comment-list';
import '../../components/comment-form';

const Detail = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainElement = document.querySelector('#main');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const descRestoElement = document.createElement('restaurant-desc');
    mainElement.appendChild(descRestoElement);

    const detailRestoElement = document.createElement('restaurant-detail');
    mainElement.appendChild(detailRestoElement);

    const commentsListElement = document.createElement('comment-list');
    mainElement.appendChild(commentsListElement);

    const restaurant = await RestaurantSource.detail(url.id);

    if (restaurant !== undefined) {
      descRestoElement.restaurant = await restaurant;
      detailRestoElement.restaurant = await restaurant;

      const comments = await restaurant.customerReviews;

      if (comments.length > 0) {
        commentsListElement.comments = await comments;
      } else {
        commentsListElement.noComment = true;
      }
    }

    const formCommentElement = document.createElement('comment-form');
    formCommentElement.restoId = await restaurant.id;
    mainElement.appendChild(formCommentElement);

    const buttonLikeContainer = document.createElement('div');
    buttonLikeContainer.classList.add('button-container');
    mainElement.appendChild(buttonLikeContainer);

    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('.button-container'),
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });
  },
};

export default Detail;
