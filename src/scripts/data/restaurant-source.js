import API_ENDPOINT from './api-endpoint';

class RestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async search(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async review(comment) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, option);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
