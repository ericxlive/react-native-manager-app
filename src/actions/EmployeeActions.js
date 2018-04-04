import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) =>  // Prop indicates the operation.
     ({ // Return a object with these two properties: prop and also value.
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    });
