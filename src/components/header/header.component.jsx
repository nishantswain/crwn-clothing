import React from 'react';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/original.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'


const Header=({currentUser,hidden})=>(

<HeaderContainer>
    <LogoContainer className='logo-container' to='/'> 
    <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer className='options'>
        <OptionLink className='option' to='/shop'>
            SHOP
        </OptionLink>
       
        <OptionLink className='option' to='/shop'>
            CONATCT
        </OptionLink>
        
        { currentUser?
        <OptionLink as='div' className='option' onClick={()=>(auth.signOut())}>SIGN OUT</OptionLink>
            :
            <OptionLink className='option' to='/signin'>
            SIGN IN
        </OptionLink>
            }
            
            <CartIcon/>
            
    </OptionsContainer>
    {hidden?null:
    <CartDropdown/>
    }
</HeaderContainer>

)


const mapStateToProps = createStructuredSelector({

    currentUser:selectCurrentUser,
    hidden:selectCartHidden
    /** acessing  current user from STORE , 
                                           store conatins the currentUser value 
                                           as App component dispatches the user object to userReducer via action.
                                           An action is heard by every reducer, based on the action type every 
                                           reducer decides wether something is to be updated to the store
                                           ( Reducers are functions which have previous state and then accept 
                                            the action object, check the action type via switch statement, 
                                            then return an updated state)
                                           The type of actions which we want to be heard can be declared in a new js file 
                                           these actions are functions accept the details which we want to save in the store 
                                           and return an object , this object consists of two fileds,
                                           type:'type_Of_action' , payload: details to be stored;
                                           These actions are fired up from the component that want to dispatch some
                                           state detail to store.
    
                                           userReducer updates to rootReducer as 
                                            ({user:userReducer}),
                                            & rootReducer updates  to store */
})

export default connect(mapStateToProps)(Header);