import axios from "axios";

const KEY = "076b6abc8ec9f9bff97e57acf85d276e";

export const searchTrandMouve = () => {
  const API = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
  return axios.get(API).then((resolve) => {
    return resolve;
  });
};

export const searchMouves = (query) => {
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(API).then((resolve) => {
    return resolve;
  });
};

export const searchMouvesDetails = (id) => {
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return axios.get(API).then((resolve) => {
    return resolve.data;
  });
};

export const searchMouvesCredits = (id) => {
  const API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  return axios.get(API).then((resolve) => {
    return resolve;
  });
};

export const searchMouvesReviews = (id) => {
  const API = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return axios.get(API).then((resolve) => {
    return resolve;
  });
};
