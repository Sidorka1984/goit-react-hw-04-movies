import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "bd70587ffb8347f1a10c97b1c5e259bd";

const fetchTrends = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const trends = data.results;
    return trends;
  } catch (error) {
    console.error("Smth wrong with fetch trends in api", error);
  }
};

const fetchMoviesBySearch = async (searchQuery, page) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&language=en&query=${searchQuery}`
    );
    const results = data.results;
    return results;
  } catch (error) {
    console.error("Smth wrong with fetch trends in api", error);
  }
};

const fetchMovieById = async (id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error("Smth wrong with fetch movie id in api", error);
  }
};

const fetchCast = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const results = await response.data.cast;

  return results;
};

const fetchReviews = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const results = await response.data.results;

  return results;
};

export default {
  fetchTrends,
  fetchMoviesBySearch,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};
