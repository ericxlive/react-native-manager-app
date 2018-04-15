import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Section, Button, Container } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        // Action creator call. Monday default.
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        console.log(this.props.employee);
        return (
            <Container>
                <EmployeeForm {...this.props} />
                <Section>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </Section>
            </Container> 
        );
    }
}

const mapStateToProps = (state) => {
    // The state.employeeForm came from reducers/index.js assignment line 7.
    const { name, phone, shift } = state.employeeForm; 
    return { name, phone, shift };
};

export default connect( // the secont {} are actions mapped.
    mapStateToProps, { employeeUpdate, employeeCreate } // Args.
)(EmployeeCreate);
