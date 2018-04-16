import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Container, Section, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {

    componentWillMount() {
        /*** Interagir em cima de todas propriedades do employee. Percorrer os props e 
         *** colocar nos fields. From that object, for each value, key where value is 
             value and the key is the prop itself, call an action creator with this. */
        _.each(this.props.employee, (value, prop) => {
            // We enter an object with the prop and the value associeted with the prop.
            this.props.employeeUpdate({ prop, value });
        });
    }

    onTextPress() {
        /**
         * Get phone and shift from this.props object.
         */
        const { phone, shift } = this.props;
        /**
         * It could be Communications.text(...)
         */
        text(phone, ` Your upcomming shift is on ${shift}`);
    }

    onButtonPress() {
        // We don't have this.props not yet. Map with mapStateToProps to get it.
        const { name, phone, shift } = this.props;
        /**
         * We enter the modified name, phone and shift. Uid is still the same. This employee came
         * from the call when a very specific employee is selected. Inside the ListItem.js there's
         * an event handler called by the button. 
         * 
         * The function handler/helper is onRowPress and 
         * this handler calls Actions.employeeEdit entering the employee as a very specific 
         * parameter.
         * */ 
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    render() { 
        return (
            <Container>
                <EmployeeForm /> 
                <Section>
                    <Button onPress={this.onButtonPress.bind(this)}>Update</Button>
                </Section>
                <Section>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Send Schedule
                    </Button>
                </Section>
            </Container>
        );
    }
}

/**
 * Gets name, phone and shift from the piece of state called employeeForm.
 * From our form reducer, get name, phone and shift. The employeeForm is a
 * piece of state we will store.
 */
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(
    mapStateToProps, 
    { employeeUpdate, employeeSave }
)(EmployeeEdit);
