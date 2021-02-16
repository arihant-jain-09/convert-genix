import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'
const config={
    apiKey: "AIzaSyDMkItbcC4EiZ1zLHXpO_in5RColX2AVSU",
    authDomain: "convert-genix.firebaseapp.com",
    projectId: "convert-genix",
    storageBucket: "convert-genix.appspot.com",
    messagingSenderId: "572806221197",
    appId: "1:572806221197:web:ad2d8bb514d085ee0181c4",
    measurementId: "G-875MBVK8D4"
  };
  export async function CreateUserProfileDocument(userAuth,additionalData) {
     if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
   }
  export const app=firebase.initializeApp(config)
  export const auth=firebase.auth();
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;
