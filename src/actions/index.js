import firebase from 'firebase';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

// The argument is "text". It returns a plain js object.
export const emailChanged = (text) => 
    // A plain javascript object. An object with one property and its value.
     ({
        type: EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
        type: PASSWORD_CHANGED,
        payload: text
    });

/**
 * It expects an object with email and password as argument.
 * Target 1: 
 */
export const loginUser = ({ email, password }) => {
    
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
  
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
        
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};
// This is a E6 returning statement. No need to type return anymore.
const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
        type: LOGIN_USER_SUCCESS, 
        payload: user 
    });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

