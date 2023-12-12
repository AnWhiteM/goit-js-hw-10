import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_ngaDpZlhR6jvKda6FAVglxPXuBenTA9unRoZ9CKmoKC32j2rZ4cMvRbxxdqbhEXl';

const catUrl = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios
    .get(`${catUrl}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${catUrl}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export { fetchCatByBreed, fetchBreeds };

// live_ngaDpZlhR6jvKda6FAVglxPXuBenTA9unRoZ9CKmoKC32j2rZ4cMvRbxxdqbhEXl
