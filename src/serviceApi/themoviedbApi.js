// const KEY_API = '76d76dfd7b6e978a139e5b8adc9a8ee6';
const BASE_URL = 'https://api.themoviedb.org';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ3NmRmZDdiNmU5NzhhMTM5ZTViOGFkYzlhOGVlNiIsInN1YiI6IjY1MTNlMjI4NzlhMWMzMDEzYWE2ZGY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLljB3dWM0vxoQXzuHqabIWo1lgTHgs-WsVPw4nkuQw',
  },
};

export const fetchApi = async query => {
  try {
    const response = await fetch(`${BASE_URL}${query}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const fetchSingleCardData = async id =>
  await fetchApi(`/3/movie/${id}?language=en-US`);

export const fetchPopularMovies = async () =>
  await fetchApi('/3/trending/movie/day?language=en-US');

export const fetchSearchQuery = async query =>
  await fetchApi(
    `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );

export const fetchCast = async id =>
  await fetchApi(`/3/movie/${id}/credits?language=en-US`);

export const fetchReviews = async id =>
  await fetchApi(`/3/movie/${id}/reviews?language=en-US&page=1`);
