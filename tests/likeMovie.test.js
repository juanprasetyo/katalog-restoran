/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="button-container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambahkan ke Favorit"]')).toBeTruthy();
  });

  it('should not show the unlike button when restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari Favorit"]')).toBeFalsy();
  });

  it('should be able to like restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('button-like').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestoIdb.getDetail(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestoIdb.delete(1);
  });

  it('should not add restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.put({ id: 1 });

    document.querySelector('button-like').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.delete(1);
  });

  it('should not add restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('button-like').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});
