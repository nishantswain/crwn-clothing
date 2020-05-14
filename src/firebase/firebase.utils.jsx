import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

const config={
    apiKey: "AIzaSyBQiKDlOVVYvrqAjzC47zwaYoZln1NBv-A",
    authDomain: "crwn-db-69ca7.firebaseapp.com",
    databaseURL: "https://crwn-db-69ca7.firebaseio.com",
    projectId: "crwn-db-69ca7",
    storageBucket: "crwn-db-69ca7.appspot.com",
    messagingSenderId: "85698643590",
    appId: "1:85698643590:web:c45f75b9177780fc8df307",
    measurementId: "G-6JW6JCSWRY"
  };

  export const createUserProfileDocument =async (userAuth, additionalData)=>{

    if(!userAuth) return;

    const userRefQuery= firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRefQuery.get();

    if(!snapShot.exists){

      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        userRefQuery.set({displayName,
                        email,
                        createdAt,
                        ...additionalData
                      });
      }
      catch(error){
        console.log('error creating User',error.message);
      }
      

    }

    return userRefQuery;
  }





  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();
  
  // export const x=firestore.collection('users')

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;