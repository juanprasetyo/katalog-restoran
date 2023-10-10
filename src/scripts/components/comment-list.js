import './comment-item';

class CommentList extends HTMLElement {
  set comments(comments) {
    this._comments = comments;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="container">
        <div class="row">
          <div class="col-12">
            <div class="card-detail">
              <h2 class="fs-5 fs-md-4 fs-lg-3 fw-bold text-center" style="margin-bottom: 1.25rem" tabindex="0">Komentar Pelanggan</h2>
              <div class="row list-comment"></div>
            </div>
          </div>
        </div>
      </section>
    `;

    const listCommentContainer = this.querySelector('.list-comment');
    this._comments.forEach((comment) => {
      const commentElement = document.createElement('comment-item');
      commentElement.comment = comment;
      listCommentContainer.appendChild(commentElement);
    });
  }
}

customElements.define('comment-list', CommentList);
