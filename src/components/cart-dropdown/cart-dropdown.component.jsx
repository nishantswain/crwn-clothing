import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {CartDropdownConatiner,CartItemsConatiner,EmptyMessageSpan,CustomStyledButton} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, match, dispatch }) => (
  <CartDropdownConatiner className="cart-dropdown">
    <CartItemsConatiner className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageSpan className="empty-message">Your cart is empty</EmptyMessageSpan>
      )}
    </CartItemsConatiner>

    <CustomStyledButton onClick={() => { 
                                 history.push(`${match.url}checkout`);
                                 dispatch(toggleCartHidden());
                                    }}>
                            GO TO CHECKOUT
    </CustomStyledButton>
  </CartDropdownConatiner>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
// const mapDispatchToProps =(dispatch)=>{

//     propFunc:data=>dispatch(action(data))
// }

export default withRouter(connect(mapStateToProps)(CartDropdown));
