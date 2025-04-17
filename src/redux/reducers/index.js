import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import searchResultsReducer from "./searchResultsReducer";

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  searchResults: searchResultsReducer,
});

export default mainReducer;
