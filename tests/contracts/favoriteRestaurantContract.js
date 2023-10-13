/* eslint-disable no-undef */
const itActAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('harus mengembalikan restoran yang telah ditambahkan', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.getDetail(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getDetail(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getDetail(3)).toEqual(undefined);
  });

  it('harus menolak penambahan restoran jika restoran tersebut tidak memiliki properti yang benar', async () => {
    favoriteRestaurant.put({ property: 'property' });

    expect(await favoriteRestaurant.getAll([]));
  });

  it('harus bisa mengembalikan semua restoran yang telah ditambahkan', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.getAll()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('harus bisa menghapus restoran favorit', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    favoriteRestaurant.delete(1);

    expect(await favoriteRestaurant.getAll()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('harus menangani permintaan untuk menghapus restoran meskipun restoran belum ditambahkan ke favorit', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    favoriteRestaurant.delete(4);

    expect(await favoriteRestaurant.getAll()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActAsFavoriteRestaurantModel };
