import { combineReducers } from "redux";

import { getTheMovies } from "./movies";

const rootReducer = combineReducers({ getTheMovies });

export default rootReducer;
