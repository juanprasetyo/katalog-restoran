const NavbarActiveInitiator = {
  init() {
    const currentUrl = window.location.hash;
    const currentPath = currentUrl.split('/').slice(1).join('/');
    const navLinks = document.querySelectorAll('.nav-link');

    this._clearActive(navLinks);

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute('href').split('#/').slice(1).join('');
      const exclude = link.getAttribute('data-exclude');
      if (currentPath === linkHref && !exclude) {
        this._setActive(link);
      }
    });
  },

  _setActive(link) {
    const text = link.textContent;
    link.classList.add('active');
    link.setAttribute('aria-label', `Halaman Aktif ${text}`);
  },

  _clearActive(links) {
    links.forEach((link) => {
      link.classList.remove('active');
      link.removeAttribute('aria-label');
    });
  },
};

export default NavbarActiveInitiator;
