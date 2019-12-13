import { combineReducers, createStore } from "redux";
import { offers, user } from "./reducers";

import OFFERS from "DATA/offers.json";
import USER from "DATA/user.json";

const rootReducer = combineReducers({
  user,
  offers
});

export default createStore(rootReducer, {
  user: USER,
  offers: OFFERS
});
