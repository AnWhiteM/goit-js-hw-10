import { fetchBreeds, fetchCatByBreed } from './js/cat';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function populateBreedsSelect() {
  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        breedSelect.add(option);
      });
      breedSelect.style.display = 'block';
      loader.style.display = 'none';
    })
    .catch(() => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
}

function showCatInfo(breedId) {
  loader.style.display = 'block';
  catInfo.style.display = 'none';
  error.style.display = 'none';

  fetchCatByBreed(breedId)
    .then(catData => {
      const cat = catData[0];
      console.log(cat);

      catInfo.innerHTML = `<img src="${cat.url}" alt="Cat Image" />
                    `;

      loader.style.display = 'none';
      catInfo.style.display = 'block';
    })
    .catch(() => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
}

breedSelect.addEventListener('change', event => {
  const selectedBreedId = event.target.value;
  showCatInfo(selectedBreedId);
});

populateBreedsSelect();
