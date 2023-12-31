/* eslint-disable no-undef */
const assert = require('assert');

Feature('Batal Sukai Restoran');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Menampilkan tidak ada restoran yang disukai', ({ I }) => {
  I.seeElement('.container.title');
  I.waitForElement('h2');
  I.see('Tidak Ada Restoran Favorit Anda', 'h2');
});

Scenario('Batal sukai restoran', async ({ I }) => {
  I.seeElement('.container.title');

  I.waitForElement('h2');
  I.see('Tidak Ada Restoran Favorit Anda', 'h2');

  I.amOnPage('/');

  I.waitForElement('restaurant-item');
  I.seeElement('restaurant-item');
  const firstRestaurant = locate('restaurant-item').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant.find('h3.title'));
  const buttonDetailFirstRestaurant = firstRestaurant.find('a.btn');
  I.click(buttonDetailFirstRestaurant);

  I.waitForElement('button-like');
  I.seeElement('button-like');
  I.click('button-like');

  I.amOnPage('/#/favorite');

  I.waitForElement('restaurant-item');
  I.seeElement('restaurant-item');
  const firstLikedRestaurant = locate('restaurant-item').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant.find('h3.title'));

  assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle);

  const buttonDetailFirstLikedRestaurant = firstLikedRestaurant.find('a.btn');
  I.click(buttonDetailFirstLikedRestaurant);

  I.waitForElement('button-unlike');
  I.seeElement('button-unlike');
  I.click('button-unlike');

  I.amOnPage('/#/favorite');
  I.waitForElement('h2');
  I.see('Tidak Ada Restoran Favorit Anda', 'h2');

  I.dontSeeElement('restaurant-item');
});
