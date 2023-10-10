import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import '../../components/restaurant-desc';
import '../../components/restaurant-detail';
import '../../components/comment-list';
import '../../components/comment-form';
import '../../components/button-favorite';

const Detail = {
  async render() {
    return `
      <section id="descResto" class="container pb-0">
        <div class="row template-skeleton">
          <div class="col-12">
            <div class="card-detail skeleton">
              <h1 class="fs-1" tabindex="0"></h1>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <p tabindex="0"></p>
                </div>
                <picture class="col-12 col-lg-6"></picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="detailResto" class="container py-0">
        <div class="row template-skeleton">
          <div class="col-12 col-lg-8">
            <div class="card-detail skeleton">
              <h2 tabindex="0"></h2>
              <div class="row">
                <div class="col-12 col-md-6">
                  <h3 tabindex="0"></h3>
                  <ul class="list-food" tabindex="0">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div class="col-12 col-md-6">
                  <h3 tabindex="0"></h3>
                  <ul class="list-drink" tabindex="0">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card-detail skeleton">
              <h2 tabindex="0"></h2>
              <div class="row">
                <div class="col-12">
                  <ol class="list-info-resto">
                    <li>
                      <h3 tabindex="0"></h3>
                      <p tabindex="0"></p>
                    </li>
                    <li>
                      <h3 tabindex="0"></h3>
                      <p tabindex="0"></p>
                    </li>
                    <li>
                      <h3 tabindex="0"></h3>
                      <p tabindex="0"></p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container skeleton-comment template-skeleton">
        <div class="row">
          <div class="col-12">
            <div class="card-detail">
              <h2 class="fs-5 fs-md-4 fs-lg-3 fw-bold text-center" style="margin-bottom: 1.25rem" tabindex="0">Komentar Pelanggan</h2>
              <div class="row list-comment">
                <div class="card-comment row skeleton">
                  <div class="card-comment-profile col-2" tabindex="0" aria-label="Profile">
                    <i></i>
                  </div>
                  <div class="card-comment-body col-10">
                    <div class="comment-create">
                      <h3 class="author fs-6" tabindex="0"></h3>
                      <p class="fs-8 fs-lg-7" tabindex="0"></p>
                    </div>
                    <p class="fs-8 fs-lg-7 comment" tabindex="0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const mainElement = document.querySelector('#main');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurant = await RestaurantSource.detail(url.id);

    if (restaurant !== undefined) {
      const descRestoContainer = document.querySelector('#descResto');
      const templateSkeletonDescResto = descRestoContainer.querySelector('.template-skeleton');
      templateSkeletonDescResto.classList.toggle('hidden');

      const detailRestoContainer = document.querySelector('#detailResto');
      const templateSkeletonDetailResto = detailRestoContainer.querySelector('.template-skeleton');
      templateSkeletonDetailResto.classList.toggle('hidden');

      const descRestoElement = document.createElement('restaurant-desc');
      descRestoElement.restaurant = await restaurant;
      descRestoContainer.appendChild(descRestoElement);

      const detailRestoElement = document.createElement('restaurant-detail');
      detailRestoElement.restaurant = await restaurant;
      detailRestoContainer.appendChild(detailRestoElement);

      const templateSkeletonCommentsList = document.querySelector('.skeleton-comment.template-skeleton');
      templateSkeletonCommentsList.classList.toggle('hidden');

      const comments = await restaurant.customerReviews;
      const commentsListElement = document.createElement('comment-list');
      commentsListElement.comments = await comments;
      mainElement.appendChild(commentsListElement);
    }

    const formCommentElement = document.createElement('comment-form');
    formCommentElement.restoId = restaurant.id;
    mainElement.appendChild(formCommentElement);

    const buttonFavoriteElement = document.createElement('button-favorite');
    buttonFavoriteElement.restaurant = await restaurant;
    mainElement.appendChild(buttonFavoriteElement);
  },
};

export default Detail;
