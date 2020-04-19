import 'firebase/auth'
import Firebase from 'firebase'
import firebase from './firebaseInit'

export default {
  login() {
    const provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      })
  },
  logout() {
    firebase.auth().signOut()
    .then(function() {})
    .catch(function(error) {
      console.log(error)});
  }
}
