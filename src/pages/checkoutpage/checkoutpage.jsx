import React from "react";
import {CheckoutPageContainer,HeaderContainer,HeaderBlock,TotalContainer,Warning} from './checkoutpage.styles'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckOutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer className="checkout-page">
    <HeaderContainer className="checkout-header">
      <HeaderBlock className="header-block">
        <span>Product</span>
      </HeaderBlock>

      <HeaderBlock className="header-block">
        <span>Description</span>
      </HeaderBlock>

      <HeaderBlock className="header-block">
        <span>Quantity</span>
      </HeaderBlock>

      <HeaderBlock className="header-block">
        <span>Price</span>
      </HeaderBlock>

      <HeaderBlock className="header-block">
        <span>Remove</span>
      </HeaderBlock>
    </HeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}

    <TotalContainer className="total">TOTAL: ${total}</TotalContainer>

    <Warning className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </Warning>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>


);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
