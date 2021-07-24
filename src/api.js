import axios from "axios";
import { response } from "express";
import { result } from "lodash";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "bd70587ffb8347f1a10c97b1c5e259bd";

export const fetchTrends = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const trends = response.results;

  return trends;
};

export const fetchMoviesBySearch = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&language=en&query=${searchQuery}`
  );
  const results = await response.data.results;
  return results;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const results = await response.data;
  return results;
};

export const fetchCast = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const results = await response.data.cast;
  return results;
};

export const fetchReviews = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  const results = response.data.results;
  return results;
};
