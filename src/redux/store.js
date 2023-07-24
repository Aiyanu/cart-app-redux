import cartItems from "../cart-items";
import {combineReducers } from "redux";
// redux stuff
import { createStore } from "redux"
import cartReducer from "./reducers/cartReducer";
import modalReducer from "./reducers/modalReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    modal:modalReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())