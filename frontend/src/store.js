import { createStore,combineReducers, applyMiddleware } from 'redux';
//import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducers/userReducers'

const reducer = combineReducers({

    auth:authReducer

})

const middlware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)))
export default store;