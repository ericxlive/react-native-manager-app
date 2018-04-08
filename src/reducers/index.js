import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer, // To be called in mapStateToProps()
    employeeForm: EmployeeFormReducer // To be called in mapStateToProps()
});
