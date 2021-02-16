import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
const config={
    apiKey: "AIzaSyDMkItbcC4EiZ1zLHXpO_in5RColX2AVSU",
    authDomain: "convert-genix.firebaseapp.com",
    projectId: "convert-genix",
    storageBucket: "convert-genix.appspot.com",
    messagingSenderId: "572806221197",
    appId: "1:572806221197:web:ad2d8bb514d085ee0181c4",
    measurementId: "G-875MBVK8D4"
  };
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
  prompt: 'select_account'
});
function signInWithGoogle(){
  auth.signInWithPopup(provider)
}
export {signInWithGoogle}
export default firebase;
