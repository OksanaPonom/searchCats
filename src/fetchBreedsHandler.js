import { select } from '.';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const loader = document.querySelector('.loader');

export async function fetchBreedsHandler() {
  try {
    loader.classList.remove('hidden');

    const response = await fetchBreeds();
    select.classList.remove('hidden');
    return response.data;
  } catch (error) {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  } finally {
    loader.classList.add('hidden');
  }
}

export async function fetchCatByBreedHandler(id) {
  try {
    loader.classList.remove('hidden');
    const response = await fetchCatByBreed(id);
    return response.data;
  } catch (error) {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  } finally {
    loader.classList.add('hidden');
  }
}
