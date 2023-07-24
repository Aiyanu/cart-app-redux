export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const CLEAR_CART = "CLEAR_CART"
export const REMOVE = "REMOVE"
export const GET_TOTALS = "GET_TOTALS"
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT"


export const increase = (id) => {
    return {
        type: INCREASE,
        payload:{id}
    }
}
export const decrease = (id,amount) => {
    return {
        type: DECREASE,
        payload:{id,amount}
    }
}
export const clearCart = () => {
    return {
        type:CLEAR_CART
    }
}
export const remove = (id) => {
    return {
        type: REMOVE,
        payload:{id}
    }
}
export const getTotal = () => {
    return {
        type:GET_TOTALS
    }
}