import axios from 'axios';
import apiSettings from './settings';

const { pixabayKey, pixabayUrl } = apiSettings;

async function getImg(query, page, perPage) {
  const response = await axios.get(
    `${pixabayUrl}?key=${pixabayKey}'&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response;
}

export { getImg };
