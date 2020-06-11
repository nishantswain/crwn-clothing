import React from 'react'


import {CartItemContainer,ItemImage,ItemDetails} from './cart-item.styles'


const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <CartItemContainer >
        <ItemImage src={imageUrl} alt='item'/>
        <ItemDetails className='item-details'>
            <span >{name}</span>
            <span >
                {quantity}X{price}
                </span>


        </ItemDetails>

    </CartItemContainer>

)

export default CartItem;