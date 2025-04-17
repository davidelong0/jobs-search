import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SEARCH_RESULTS,
} from "./actionTypes";

const BASE_URL = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavourites = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
});

export const removeFromFavourites = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults(data));
      } else {
        alert("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
