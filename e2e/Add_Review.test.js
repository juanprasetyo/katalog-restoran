/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Menambahkan review', async ({ I }) => {
  I.waitForElement('restaurant-item');
  I.seeElement('restaurant-item');

  const buttonDetailFirstRestaurant = locate('restaurant-item a.btn');
  I.click(buttonDetailFirstRestaurant);

  I.waitForElement('comment-list');

  const commentsCount = await I.grabNumberOfVisibleElements('comment-item');

  I.waitForElement('#formAddComment');
  I.seeElement('#formAddComment');

  const nameCommentator = 'Testing Komen Nama';
  const comment = 'Ini komentar testing';

  I.fillField('Nama', nameCommentator);
  I.fillField('Komentar', comment);

  I.click('Submit', '#formAddComment');

  I.wait(5);

  const newCommentsCount = await I.grabNumberOfVisibleElements('comment-item');

  const addedComment = locate('comment-item').first();
  const addedCommentName = await I.grabTextFrom(addedComment.find('h3.author'));
  const addedCommentText = await I.grabTextFrom(addedComment.find('p.comment'));

  assert.strictEqual(commentsCount + 1, newCommentsCount);
  assert.strictEqual(nameCommentator, addedCommentName);
  assert.strictEqual(comment, addedCommentText);
});
