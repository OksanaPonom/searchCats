import axios from 'axios';

const API_KEY =
  'live_HUvWkiWktAaUpK5cGcQBiSQo9zx4vlteLWjLOaKd68gIERCnlnq62qzjzR7RguWn';
const BASE_URL = 'https://api.thecatapi.com/v1/';

export async function fetchBreeds() {
  const breeds = await axios.get(`${BASE_URL}breeds?key=${API_KEY}`);
  return breeds;
}

export async function fetchCatByBreed(id) {
  const breedId = await axios.get(`${BASE_URL}images/${id}`);
  return breedId;
}
