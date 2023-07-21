import cartItems from "../cart-items";
// redux stuff
import { createStore } from "redux"
import reducer from "../reducer";
const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
}

export const store = createStore(reducer, initialStore,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())