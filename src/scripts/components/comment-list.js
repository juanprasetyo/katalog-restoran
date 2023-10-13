import './comment-item';

class CommentList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set comments(comments) {
    this._comments = comments.reverse();
    this.render();
  }

  set noComment(noComment) {
    this._noComment = noComment;
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="container pb-0">
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
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 2; i++) {
      const commentElement = document.createElement('comment-item');
      listCommentContainer.appendChild(commentElement);
    }

    if (this._comments) {
      listCommentContainer.innerHTML = '';
      this._comments.forEach((comment) => {
        const commentElement = document.createElement('comment-item');
        listCommentContainer.appendChild(commentElement);
        commentElement.comment = comment;
      });
    }

    if (this._noComment) {
      listCommentContainer.innerHTML = `
        <h3 class="text-center" style="width: 100%;">Tidak Ada Komentar</h3>
      `;
    }
  }
}

customElements.define('comment-list', CommentList);
