import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) =>  // Prop indicates the operation.
     ({ // Return a object with these two properties: prop and also value.
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    });

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`users/${currentUser.uid})/employees`)
        .push({ name, phone, shift });
};
