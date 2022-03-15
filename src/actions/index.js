import axios from "../axios";
import requests from "../requests";

export const fetchNetflixOriginals = () => async (dispatch) => {
  const response = await axios.get(requests.fetchNetflixOriginals);
  dispatch({ type: "fetchNetflixOriginals", payload: response.data.results });
};

export const fetchTrending = () => async (dispatch) => {
  const response = await axios.get(requests.fetchTrending);
  dispatch({ type: "fetchTrending", payload: response.data.results });
};

export const fetchTopRated = () => async (dispatch) => {
  const response = await axios.get(requests.fetchTopRated);
  dispatch({ type: "fetchTopRated", payload: response.data.results });
};

export const fetchActionMovies = () => async (dispatch) => {
  const response = await axios.get(requests.fetchActionMovies);
  dispatch({ type: "fetchActionMovies", payload: response.data.results });
};

export const fetchComedyMovies = () => async (dispatch) => {
  const response = await axios.get(requests.fetchComedyMovies);
  dispatch({ type: "fetchComedyMovies", payload: response.data.results });
};

export const fetchHorrorMovies = () => async (dispatch) => {
  const response = await axios.get(requests.fetchHorrorMovies);
  dispatch({ type: "fetchHorrorMovies", payload: response.data.results });
};

export const fetchRomanceMovies = () => async (dispatch) => {
  const response = await axios.get(requests.fetchRomanceMovies);
  dispatch({ type: "fetchRomanceMovies", payload: response.data.results });
};

export const fetchDocumentaries = () => async (dispatch) => {
  const response = await axios.get(requests.fetchDocumentaries);
  dispatch({ type: "fetchDocumentaries", payload: response.data.results });
};
