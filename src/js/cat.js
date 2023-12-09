import axios from 'axios';

axios.defaults.headers.common[
  'live_ngaDpZlhR6jvKda6FAVglxPXuBenTA9unRoZ9CKmoKC32j2rZ4cMvRbxxdqbhEXl'
] = 'your-api-key';

export async function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export async function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
