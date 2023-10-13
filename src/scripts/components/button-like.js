class ButtonLike extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('btn-like-container');
    this.innerHTML = `
      <button class="btn-like" aria-label="Tambahkan ke Favorit" title="Tambahkan ke Favorit">
        <i class="bi bi-heart"></i>
      </button>
    `;
  }
}

customElements.define('button-like', ButtonLike);
