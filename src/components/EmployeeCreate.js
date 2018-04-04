import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Container, Section, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Container>
                <Section>
                    <Input 
                        label="Name" 
                        placeholder="Jane" 
                        value={this.props.name} 
                        // EmployeeAction signature pattern {prop, value}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })} 
                    />
                </Section>
                <Section>
                    <Input 
                        label="Phone" 
                        placeholder="+1647325436" 
                        value={this.props.phone} 
                        // EmployeeAction signature pattern {prop, value}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })} 
                    />
                </Section>
                
                <Section>
                    <Button>
                        Create
                    </Button>
                </Section>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    // The state.EmployeeForm came from reducers/index.js assignment line 7.
    const { name, phone, shift } = state.EmployeeForm; 
    return { name, phone, shift };
};

export default connect(
    mapStateToProps, { employeeUpdate } // Args.
)(EmployeeCreate);
