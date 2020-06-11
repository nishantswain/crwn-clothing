import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartDropdownConatiner = styled.div`

position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

`

export const CustomStyledButton = styled(CustomButton)`
margin-top: auto;
`

export const CartItemsConatiner =styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: auto;

`
export const EmptyMessageSpan =styled.span`
margin: 90px auto;
font-size: 18px;
`
