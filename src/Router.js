import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please login" initial />
            </Scene>
            <Scene key="main">
                <Scene 
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees" 
                />
            </Scene>
            <Scene key="employeeCreate" component={EmployeeCreate} title="New Employee" />
        </Router>
    );

export default RouterComponent;
