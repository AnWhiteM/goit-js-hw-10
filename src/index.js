import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

breedSelect.style.visibility = 'hidden';

fetchBreeds()
  .then(breeds => {
    breedSelect.style.visibility = 'visible';

    loader.style.display = 'none';

    const cats = breeds
      .map(
        breed => `
    <option value="${breed.id}">${breed.name}</optiom>
    `
      )
      .join('');

    breedSelect.insertAdjacentHTML('beforeend', cats);
    new SlimSelect({
      select: breedSelect,
    });
  })
  .catch(error => {
    loader.style.display = 'none';
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });
breedSelect.addEventListener('change', function () {
  const selectedBreedId = this.value;
  catInfo.innerHTML = '';

  loader.style.display = 'block';

  fetchCatByBreed(selectedBreedId)
    .then(breeds => {
      loader.style.display = 'none';
      const catData = breeds[0];

      catInfo.innerHTML = `
        <div><img src="${catData.url}" alt="Cat-image" /></div>
        <div>
          <h2>${catData.breeds[0].name}</h2>
          <p>Description: ${catData.breeds[0].description}</p>
          <p>Temperament: ${catData.breeds[0].temperament}</p>
        </div> `;
      catInfo.style.display = 'flex';
    })

    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
});
