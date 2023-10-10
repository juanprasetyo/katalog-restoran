/* eslint-disable no-alert */
import RestaurantSource from '../data/restaurant-source';
import './comment-list';

class CommentForm extends HTMLElement {
  set restoId(restoId) {
    this._restoId = restoId;
    this.render();
  }

  render() {
    // this.classList.add('container');
    this.innerHTML = `
      <section class="container py-0">
        <div class="row">
          <div class="col-12">
            <div class="form-comment">
              <h2 class="fs-5 fs-md-4 fs-lg-3 fw-bold text-center" style="margin-bottom: 1.25rem" tabindex="0">Tambahkan Komentar</h2>
              <form action="" id="formAddComment">
                <input type="hidden" value="${this._restoId}" name="restoId" required>
                <div class="form-group">
                  <label for="inputName">Nama</label>
                  <input type="text" name="inputName" id="inputName" placeholder="Masukkan Nama Anda" required>
                </div>
                <div class="form-group">
                  <label for="inputComment">Komentar</label>
                  <textarea type="text" name="inputComment" id="inputComment" placeholder="Masukkan komentar Anda" required></textarea>
                </div>
                <button type="submit" class="fs-7 fw-semi-bold">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>   
    `;

    const formAddCommentElement = this.querySelector('#formAddComment');
    formAddCommentElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      const comment = {
        id: formAddCommentElement.querySelector('input[name="restoId"]').value,
        name: formAddCommentElement.querySelector('input[name="inputName"]').value,
        review: formAddCommentElement.querySelector('textarea[name="inputComment"]').value,
      };

      const response = await RestaurantSource.review(comment);
      const status = await response.message;

      if (status === 'success') {
        alert('Berhasil menambahkan komentar!');
        const comments = await response.customerReviews;
        const commentsListElement = document.querySelector('comment-list');
        commentsListElement.comments = await comments;
        formAddCommentElement.reset();
      } else {
        alert('Gagal menambahkan komentar!');
      }
    });
  }
}

customElements.define('comment-form', CommentForm);
