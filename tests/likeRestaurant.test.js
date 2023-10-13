/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Menyukai restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="button-container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('harus menampilkan tombol batal sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambahkan ke Favorit"]')).toBeTruthy();
  });

  it('harus tidak menampilkan tombol sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari Favorit"]')).toBeFalsy();
  });

  it('harus bisa untuk menyukai restoran', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('button-like').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestoIdb.getDetail(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestoIdb.delete(1);
  });

  it('harus tidak bisa menambahkan restoran lagi ketika sudah ditambahkan sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.put({ id: 1 });

    document.querySelector('button-like').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.delete(1);
  });

  it('harus tidak bisa menambahkan restoran ketika tidak punya id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('button-like').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});
