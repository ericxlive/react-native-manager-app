import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
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

/**
 * This action will be called with an object with name, phone, shift and uid. There are few
 * arguments here, to be more specific one object with these properties as an argument because
 * we need to update an existent object. Since we are not creating a new object, this action
 * call is different from the one above.
 */
export const employeeSave = ({ name, phone, shift, uid }) => {
    // Get access to the current user.
    const { currentUser } = firebase.auth(); 

    /**
     * This is another async routine, in this case there will be dispatch. We don't know when
     * this update will be complete. Since we have no idea when the operation will conclude, 
     * we will need to dispatch. 
     * 
     * There must be a function as return because we don't have everything not just yet. 
     * 
     * The reason we have this employees/${uid} is because we need to update one element with 
     * that specific uid.
     */
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset' });
            }); // Reset the list.
    };
};
