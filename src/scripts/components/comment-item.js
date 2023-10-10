class CommentItem extends HTMLElement {
  set comment(comment) {
    this._comment = comment;
    this.render();
  }

  render() {
    this.classList.add('col-12', 'col-lg-6');
    this.innerHTML = `
      <div class="card-comment row">
          <div class="card-comment-profile col-2" tabindex="0" aria-label="Profile ${this._comment.name}">
            <i class="bi bi-person-circle fs-1"></i>
          </div>
          <div class="card-comment-body col-10">
            <div class="comment-create">
              <h3 class="author fs-6" tabindex="0">${this._comment.name}</h3>
              <p class="fs-8 fs-lg-7" tabindex="0">${this._comment.date}</p>
            </div>
            <p class="fs-8 fs-lg-7 comment" tabindex="0">${this._comment.review}</p>
          </div>
      </div>
    `;
  }
}

customElements.define('comment-item', CommentItem);
