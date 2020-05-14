import {
    createSelector
} from 'reselect';

const selectCart = state => state.cart //this is an input selector


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(

    [selectCart],
    cart => cart.cartItems

) //this is a memoised selector

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.price*cartItem.quantity, 0)

)
//A selector is a function that accepts Redux state as an argument and returns data that is derived from that state. Selectors can provide performance optimizations to your application and can also help you encapsulate your global state tree. 