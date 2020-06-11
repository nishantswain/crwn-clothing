import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';
import { batch } from 'react-redux';

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

    if(!userAuth) return; // if userAuth object is null, retrun..

    const userRefQuery= firestore.doc(`users/${userAuth.uid}`);  // create reference Query for user, by passing user id..

    const snapShot = await userRefQuery.get(); // using that referrence query get the snapshot query

    if(!snapShot.exists){ // if the snapshot exists, enter the if loop

      const {displayName,email}=userAuth; // get the properties which you want to store in firestore's user collection
      const createdAt=new Date(); // the current date,
      try{
        userRefQuery.set({displayName,   
                        email,
                        createdAt,
                        ...additionalData
                      }); // using the reference query store the document in user collection, by passing the the requied properties to 
                          //set function of reference query.. refQuery.set({displayName,email,createdAt,..additionalData}) , cause the name and 
                          //value have the same name.
      }
      catch(error){
        console.log('error creating User',error.message);
      }
      

    }

    return userRefQuery; // after creation , return the user reference query.
  }


  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{ //here objects are documents and set of documents is collection.

    const batch=firestore.batch();
    const collectionRef=firestore.collection(collectionKey)
    objectsToAdd.forEach(obj=>{

      const newDocRef= collectionRef.doc() // this gives us a document id for every object in
                                          // objectsToAdd array.
      batch.set(newDocRef, obj);
    });

    return await batch.commit()
    
  }

export const covertCollectionsSnapshotToMap = (Collections)=>{

  const transformedCollection =Collections.docs.map(doc=>{//the docs of collection collection in firestore are stored in the form of array
    const {title,items} =doc.data();

    return{
      routeName:encodeURI(title.toLowerCase()), // sometimes the url cannot handles special charcters, this functions helps in that kind of case.
      id:doc.id, 
      title,
      items 
    }
  });

    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()]=collection;
      return accumulator;
    },{})
  console.log(transformedCollection)
}

  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();
  
  // export const x=firestore.collection('users')

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;