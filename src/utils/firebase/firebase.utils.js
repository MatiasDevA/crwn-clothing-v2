import { initializeApp } from 'firebase/app'
import {getAuth, signInWithRedirect,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc,getDoc,setDoc} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAjYiTENG_JzM4kTyfC3aRMxTq3a88z6ms",
    authDomain: "crwn-clothing-db-ec4db.firebaseapp.com",
    projectId: "crwn-clothing-db-ec4db",
    storageBucket: "crwn-clothing-db-ec4db.appspot.com",
    messagingSenderId: "927602723013",
    appId: "1:927602723013:web:18ac8d7e316c22e88988ac"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    propmt: "select_account"
  })


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {'displayName': 'mike'}) => {
    if(!userAuth)return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth
        const createdAt = new Date();

        try {
         await setDoc(userDocRef, {
            displayName,
            email,createdAt,
            ...additionalInformation
         })   
        }catch(error){
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
   if(!email || !password)return;
   return await createUserWithEmailAndPassword(auth,email,password)
  }