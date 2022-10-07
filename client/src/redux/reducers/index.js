
import { combineReducers } from "redux";
import { adsReducer } from "./ads.reducer";
import { favoritesReducer } from "./favorites.reducer";
import { detailReducer } from "./details.reducer";

export default combineReducers({
  adsReducer,
  detailReducer,
  favoritesReducer,
})