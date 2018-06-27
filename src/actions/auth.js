import { firebase, googleAuthProvider } from '../firebase/firebase';
import { LOGIN, LOGOUT } from './actionTypes';

export const login = uid => ({
  type: LOGIN,
  uid,
});

//--The "onAuthStateChanged" listener will handle dispatching
//--the login action creator.
export const startLogin = (email = undefined, password = undefined) => {
  return (dispatch) => {
    //If no email passed, then login with google
    if (!email) {
      firebase.auth().signInWithPopup(googleAuthProvider);
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(err => console.log(`Error logging in with Email: ${email} and Password: ${password} --- ${err}`));
    }
  };
};

export var startEmailRegistration = (email='', password='') => {
	//Thunk
	return (dispatch, getState) => {
		//set auth:status to working
		// dispatch(authStatus(AUTH_WORKING));
		firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
					console.log('Auth Success', result);
					// dispatch(authStatus(AUTH_LOGGED_IN));
				}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log("Email registration error", errorCode, errorMessage);
		  // dispatch(authStatus(AUTH_ERROR, `Email registration error - Error Code: ${errorCode} - Error Message: ${errorMessage}`));
		});
	};
};

export const logout = () => ({
  type: LOGOUT,
});

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch(logout());
  };
};
