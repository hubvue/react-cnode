import {createStore,applyMiddleware} from "redux";
import Thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(reducer,applyMiddleware(Thunk));

export default store;