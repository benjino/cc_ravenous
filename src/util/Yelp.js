const apiKey = 'Smc4_m816T5jBpzVEawxgYTOPiFWqOwk9E2_FoIArsrWwQc1-Ry-J3brFoWxi3KiV6i6j42EN9IPXXzLwKR4mBETZa5UrdnADT1LQZYPep6wmG8yakiCxIkXSRVnXHYx';

const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/
https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    })
  }
}

export default yelp;
