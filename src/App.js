import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page'
import CheckOutPage from './pages/checkoutpage/checkoutpage'

import {Switch,Route,Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils';
import {setCurrentUserAction} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component'
import { selectCollectionForPreview } from './redux/shop/shop.selectors';


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

    const {setCurrentUser,collectionArray} = this.props;
                          
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{ // if auth state changes in firebase, 
                                                                        //return the auth object, this is an asynchronous function

                               if(userAuth){ // if auth object exists,

                                  const userRef= await createUserProfileDocument(userAuth); // pass into this function to store the details in fbase,
                                                                                            // if snapshot doesnot exist.

                                  userRef.onSnapshot(snapShot=>{ // this method gives us A SNAPSHOT, using which we have the set currentUser in store
                                                                // for this we use setCurrentUser action, 
 
                                   setCurrentUser({ //we give the action the user data by using SNAPSHOT object. 

                                      id:snapShot.id,
                                      ...snapShot.data()
                                    });

                                  });
                               }
                               
                              setCurrentUser(userAuth);// if auth state hasnot changed set the currentUser as null in store, Store->user->currentUser

                              // addCollectionAndDocuments('collection',collectionArray.map(({title,items})=>({title,items}))) //here we destructure the the objects and select the properties we want 
                                                                                                                            //and return a new array, we know that array.map() return us a new array.
                            });
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
  currentUserProp:selectCurrentUser,
  collectionArray:selectCollectionForPreview  //this selector being used to store data in firebase

})


const mapDispatchToProps =dispatch =>({
  setCurrentUser:user => 
      dispatch(setCurrentUserAction(user))
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);


