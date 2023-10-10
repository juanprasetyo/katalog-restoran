const DrawerInitiator = {
  init({ button, drawer, content }) {
    const icon = button.querySelector('.bi');

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, icon);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, icon);
    });
  },

  _toggleDrawer(event, drawer, icon) {
    event.stopPropagation();
    drawer.classList.toggle('show');
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x-lg');
  },

  _closeDrawer(event, drawer, icon) {
    event.stopPropagation();
    drawer.classList.remove('show');
    icon.classList.remove('bi-x-lg');
    icon.classList.add('bi-list');
  },
};

export default DrawerInitiator;
