import { combineReducers } from "redux";

const DEFUALT_REDUCER = (initstate, action) => {
  return {
    key: "Hello World",
  };
};

const rootReducer = combineReducers({
  DEFUALT: DEFUALT_REDUCER,
});

export default rootReducer;
