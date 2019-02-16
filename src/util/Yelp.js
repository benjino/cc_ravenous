const apiKey = 'Smc4_m816T5jBpzVEawxgYTOPiFWqOwk9E2_FoIArsrWwQc1-Ry-J3brFoWxi3KiV6i6j42EN9IPXXzLwKR4mBETZa5UrdnADT1LQZYPep6wmG8yakiCxIkXSRVnXHYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/
https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
  }
};
