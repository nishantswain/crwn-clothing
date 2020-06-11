import styled from 'styled-components'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

export const CheckoutPageContainer = styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;

button{
    margin-left: auto;
    margin-top: 50px;

}

`
export const HeaderContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;

`

export const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;
margin-bottom: 20px;

&:last-child {
  width: 8%;
}

`
export const TotalContainer=styled.div`
margin-left: auto;
margin-top: 30px;
font-size: 36px;

`

export const Warning =styled.div`
text-align: center;
margin-top: 40px;
font-size: 24px;
color: red;

`
