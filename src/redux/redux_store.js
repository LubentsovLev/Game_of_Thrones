import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import commentreduser from "./comment-reducer";
import GameOfThronesReducer from "./GameOfThrones-reducer";
import { reducer as formReducer } from "redux-form";
let reducers = combineReducers({
  form: formReducer,
  comments: commentreduser,
  GT: GameOfThronesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
