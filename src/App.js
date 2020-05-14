import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'
import CheckOutPage from './pages/checkoutpage/checkoutpage'

import {Switch,Route,Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUserAction} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component'


// const Hatspage=(props)=>{
//   return(<div>
//     <h2>HATS</h2>
//   <button onClick={()=>(props.history.push('/'))}>Homepage</button>
//   <Link to={`${props.match.url}`}>d</Link>
//   </div>)
  
// }

class App extends React.Component{


  unsubscribeFromAuth =null;
  
  componentDidMount(){

    const {setCurrentUser} = this.props;
                          
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{

                               if(userAuth){

                                  const userRef= await createUserProfileDocument(userAuth);

                                  userRef.onSnapshot(snapShot=>{

                                   setCurrentUser({

                                      id:snapShot.id,
                                      ...snapShot.data()
                                    });

                                  });
                               }
                               else
                              setCurrentUser(null);
                          })
                    }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    
    return (
                  <div className="App" >
                    
              
              <Header/>
              <Switch>
              
              <Route exact={true} path='/' component={HomePage}/>
              <Route  path='/shop' component={ShopPage}/>
              <Route
                  exact
                  path='/signin'
                  render={() =>
                  this.props.currentUserProp ? 
                  ( <Redirect to='/' />) : 
                  (<SignInAndSignUpPage />)
                  }
               />
               <Route path='/checkout' component={CheckOutPage}/>
              </Switch>
              
                  </div>
    )
  }

}

const mapStatetoProps = createStructuredSelector({
  currentUserProp:selectCurrentUser

})


const mapDispatchToProps =dispatch =>({
  setCurrentUser:user => 
      dispatch(setCurrentUserAction(user))
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);


