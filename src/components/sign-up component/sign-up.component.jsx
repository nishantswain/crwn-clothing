import React from 'react'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,createUserProfile, createUserProfileDocument} from '../../firebase/firebase.utils'


class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    submitHandler=async event=>{

        event.preventDefault();

       const {displayName, email, password,confirmPassword}=this.state;

       if(password!=confirmPassword){
        alert("Passwords do not match");
       return;
       }
       try{
           const {user}= await auth.createUserWithEmailAndPassword(email,password)

            createUserProfileDocument(user,{displayName})


            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });


       }
       catch(error)
       {
            console.log(error);
       }


    }
    handleChange=(event)=>{

        const {name,value} = event.target;

        this.setState({[name]:value})

    }

    render()
    {
        return(
            <div className='sign-up'>
            
                <h2 className='title'>I do not have an Account</h2>
                <span className='subtitle'>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.submitHandler} >
                
                <FormInput
                type='text'
                name='displayName'
                value={this.state.displayName}
                handleChange={this.handleChange}
                label='name'
                required
                
                />
                 <FormInput
                type='email'
                name='email'
                value={this.state.email}
                handleChange={this.handleChange}
                label='email'
                required
                
                />

                <FormInput
                type='password'
                name='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='Password'
                required
                
                />

                <FormInput
                type='password'
                name='confirmPassword'
                value={this.state.confirmPassword}
                handleChange={this.handleChange}
                label='Confirm Password'
                required
                
                />
            <CustomButton
                type='submit'
            >SIGN UP</CustomButton>
            </form>
            </div>
        )
    }
}

export default SignUp;