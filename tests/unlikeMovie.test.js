/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="button-container"></div>';
  };

  beforeEach(async () => {
    await addLikeButtonContainer();
    await FavoriteRestoIdb.put({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.delete(1);
  });

  it('should show the unlike button when restaurant has been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari Favorit"]')).toBeTruthy();
  });

  it('should not show the like button when restaurant has been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambahkan ke Favorit"]')).toBeFalsy();
  });

  it('should be able to unlike restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('button-unlike').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestoIdb.getAll();
    expect(restaurant).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.delete(1);

    document.querySelector('button-unlike').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});
