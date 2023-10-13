/* eslint-disable no-undef */
const itActAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return restaurant that has been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.getDetail(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getDetail(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getDetail(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.getAll()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    favoriteRestaurant.delete(1);

    expect(await favoriteRestaurant.getAll()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant event though restaurant has not been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    favoriteRestaurant.delete(4);

    expect(await favoriteRestaurant.getAll()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActAsFavoriteRestaurantModel };
