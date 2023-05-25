import {
  fetchBreedsHandler,
  fetchCatByBreedHandler,
} from './fetchBreedsHandler';
import { select, info } from '.';
import SlimSelect from 'slim-select';

export async function markupBreeds() {
  const array = await fetchBreedsHandler();
  const markup = array
    .map(({ reference_image_id, name }) => {
      return ` <option class="select-option" value="${reference_image_id}">${name}</option>`;
    })
    .join('');
  select.innerHTML = markup;

  new SlimSelect({
    select: '#single',
  });
}

export async function markupInfoCat(id) {
  info.innerHTML = '';
  const catInfo = await fetchCatByBreedHandler(id);

  const markup = `  <img src="${catInfo.url}" alt="${catInfo.breeds[0].name}" width=400/>
      <div class="wrap">
        <h1>${catInfo.breeds[0].name}</h1>
        <p>${catInfo.breeds[0].description}</p>
        <h2>Temperament:</h2>
        <p>${catInfo.breeds[0].temperament}</p>
      </div>`;

  info.innerHTML = markup;
}
