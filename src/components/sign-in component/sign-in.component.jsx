import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import {auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    submitHandler=async event=>{
        event.preventDefault();

        const {email,password} =this.state;

        try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'',password:''});

        }
        catch(error)
        {
            console.log(error);
        }


    }

    
       
      

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render()
    {
        return(<div className='sign-in'>

        <h2 className='title'>I already have an account</h2>
        <span className='subtitle'>Sign in with email and password</span>

            <form onSubmit={this.submitHandler}>

                <FormInput 
                
                type='email' 
                name='email' 
                value={this.state.email} 
                handleChange={this.handleChange}  
                label='Email' 
                required
                
                />
                             
                <FormInput 
                
                type='password' 
                name='password' 
                value={this.state.password}  
                handleChange={this.handleChange}
                label='Password'
                required/>
              
                <div className='but-style'>
                <CustomButton type='submit'>SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
           
        </div>)
    }
}

export default  SignIn;