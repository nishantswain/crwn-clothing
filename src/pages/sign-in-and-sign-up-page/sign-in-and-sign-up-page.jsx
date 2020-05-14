import React from 'react'
import './sign-in-and-sign-up-page.scss'
import SignIn from '../../components/sign-in component/sign-in.component'
import SignUp from '../../components/sign-up component/sign-up.component'


const SignInAndSignUpPage=()=>{
    return(<div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>)
}

export default SignInAndSignUpPage;