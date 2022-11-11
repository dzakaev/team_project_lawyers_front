import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import application from "./features/application";
import categories from "./features/categories";
import services from "./features/services";
import lawyers from './features/lawyers';

const store = createStore(
  combineReducers({
    application,
    categories,
    services,
    lawyers
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
