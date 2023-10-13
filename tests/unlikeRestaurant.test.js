/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Batal sukai restoran', () => {
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

  it('harus menampilkan tombol batal sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari Favorit"]')).toBeTruthy();
  });

  it('harus tidak menampilkan tombol sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambahkan ke Favorit"]')).toBeFalsy();
  });

  it('harus bisa untuk membatalkan menyukai restoran', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('button-unlike').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestoIdb.getAll();
    expect(restaurant).toEqual([]);
  });

  it('harus tidak menampilkan error ketika user klik tombol batal sukai jika restoran tidak ada di dalam list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.delete(1);

    document.querySelector('button-unlike').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});
