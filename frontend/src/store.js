import { createStore,combineReducers, applyMiddleware } from 'redux';
//import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer , userReducer , forgotPasswordReducer } from './reducers/userReducers'

const reducer = combineReducers({

    auth:authReducer,
    user:userReducer,
    forgotPassword: forgotPasswordReducer

})

const middlware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)))
export default store;