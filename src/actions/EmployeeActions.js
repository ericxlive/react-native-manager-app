import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) =>  // Prop indicates the operation.
     ({ // Return a object with these two properties: prop and also value.
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    });

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            // Reset the entire view stack.
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE }); // Action#type.
                Actions.employeeList({ type: 'reset' });
            }); 
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => { // Any data (value), call this function with snapshot.
                // Snapshot is an object that describe a handle of employees.
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
                // Object that describes the data. The .val() gets the real list we need.
            });
    };
};
