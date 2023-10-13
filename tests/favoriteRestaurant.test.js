/* eslint-disable no-undef */
import { itActAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAll()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.delete(restaurant.id);
    });
  });

  itActAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
