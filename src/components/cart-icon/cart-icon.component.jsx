import React from 'react';
import {CartItemContainer,StyledShoppingIcon,ItemCount} from './cart-icon.styles';
import {connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <CartItemContainer onClick={toggleCartHidden}>
        <StyledShoppingIcon />
            <ItemCount> {itemCount}</ItemCount>

    </CartItemContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps =createStructuredSelector(
    
    {
    itemCount: selectCartItemsCount
})
// in jsx {return{}} is same as ({}) 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
