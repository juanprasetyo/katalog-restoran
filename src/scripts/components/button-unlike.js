class ButtonUnlike extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('btn-like-container');
    this.innerHTML = `
      <button class="btn-unlike" aria-label="Hapus dari Favorit" title="Hapus dari Favorit">
        <i class="bi bi-heart-fill"></i>
      </button>
    `;
  }
}

customElements.define('button-unlike', ButtonUnlike);
