
import { combineReducers } from "redux";
import { adsReducer } from "./ads.reducer";
import { favoritesReducer } from "./favorites.reducer";

export default combineReducers({
  adsReducer,
  favoritesReducer,
})