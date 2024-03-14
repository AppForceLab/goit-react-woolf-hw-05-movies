import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = 'b8c1b69b43f66ba99179e6c058e68d40';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGMxYjY5YjQzZjY2YmE5OTE3OWU2YzA1OGU2OGQ0MCIsInN1YiI6IjY1ZTM1OTQ1Mjc4ZDhhMDE4NWJlYzZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNLEvHlE8zFUYYpcIuliwcHUdjkBu0SAyc-dd-ApbiA';
axios.defaults.headers.common['accept'] = 'application/json';

export const getTrendingMovies = async (time_window = 'day') => {
  return await axios.get(`/trending/all/${time_window}`);
};

export const getMovie = async movieId => {
  return await axios.get(`/movie/${movieId}`);
};

export const getMovieCredits = async movieId => {
  return await axios.get(`/movie/${movieId}/credits`);
};

export const getMovieReviews = async movieId => {
  return await axios.get(`/movie/${movieId}/reviews`);
};

export const getMoviesByKeyWord = async keyWord => {
  return await axios.get(`/search/movie?query=${keyWord}`);
};
