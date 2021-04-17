import axios from "axios";

const KEY = "076b6abc8ec9f9bff97e57acf85d276e";

export const posterimgpath = `https://image.tmdb.org/t/p/w342/`;

export const searchTrandMouve = () => {
  const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  return axios.get(API).then((response) => {
    return response;
  });
};

export const searchMouves = (query) => {
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(API).then((response) => {
    return response;
  });
};

export const searchMouvesDetails = (id) => {
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return axios.get(API).then((response) => {
    return response.data;
  });
};

export const searchMouvesReviews = (id) => {
  const API = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return axios.get(API).then((response) => {
    return response.data;
  });
};

export const searchMouvesCredits = (id) => {
  const API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  return axios.get(API).then((response) => {
    return response.data;
  });
};
