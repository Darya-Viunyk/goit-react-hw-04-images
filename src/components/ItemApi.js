import axios from 'axios';

const URL = 'https://pixabay.com/api/?';
const API_KEY = '30923283-33d2e606614da3e7093560986';
const IMAGE_TYPE = 'photo';
const SAFESEARCH = 'true';
export const PER_PAGE = 12;
export const getImages = async (query, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: IMAGE_TYPE,
    safesearch: SAFESEARCH,
    per_page: PER_PAGE,
    q: query,
    page: page,
  });
  const { data } = await axios.get(`${URL}${params}`);

  return data;
  // console.log(data);
};

// export const getImages = async (query, page) => {
//   const { data } = await axios.get(`q=${query}&page=${page}`);
//   return data;
// };
