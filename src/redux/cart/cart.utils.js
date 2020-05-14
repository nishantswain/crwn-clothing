
//TO ADD NEW ITEM TO CART and TO INCREASE A CART ITEM
export const addItemtoCart=(cartItems,itemToAdd)=>{
    
    const doesItemExist=cartItems.find(cartItem=>
        cartItem.id===itemToAdd.id);

        if(doesItemExist){
            return cartItems.map(cartItem=>
                                          cartItem.id===itemToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
        }

        return [...cartItems,{...itemToAdd,quantity:1}];
};




//TO REDUCE A CART ITEM QUANTITY
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    };
