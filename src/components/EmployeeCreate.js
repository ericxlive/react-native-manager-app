import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Section, Input, Button, Container } from './common';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        // Action creator call. Monday default.
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Container>
                <View>
                    <Section>
                        <Input 
                            label="Name" 
                            placeholder="Jane" 
                            value={this.props.name} 
                            // EmployeeAction signature pattern {prop, value}
                            onChangeText={value => this.props.employeeUpdate({ 
                                prop: 'name', value 
                            })} 
                        />
                    </Section>
                    <Section>
                        <Input 
                            label="Phone" 
                            placeholder="+1647325436" 
                            value={this.props.phone} 
                            // EmployeeAction signature pattern {prop, value}
                            onChangeText={
                                value => this.props.employeeUpdate({ prop: 'phone', value })
                            } 
                        />
                    </Section>
                    
                    <Section style={{ flexDirection: 'row' }}>
                        <Text style={styles.pickerTextStyle}>Shift</Text>
                        <Picker
                            style={[styles.onePicker]} itemStyle={styles.onePickerItem}
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ 
                                prop: 'shift', value 
                            })}
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </Section>
                </View>
                
                <Section>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </Section>
            </Container> 
        );
    }
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20, // It stands off the left side of the form.
        justifyContent: 'center',
        alignItems: 'center',
        width: 100, 
        height: 44
    },
    picker: {
        width: 150,
        //backgroundColor: '#FFF0E0',
        //borderColor: 'black',
        //borderWidth: 1,
        //paddingLeft: 10
    },
    pickerItem: {
        color: 'red'
    },
    onePicker: {
        width: 150,
        height: 44,
        
        //backgroundColor: '#FFF0E0',
        //borderColor: 'black',
        //borderWidth: 1,
    },
    onePickerItem: {
        height: 44,
        color: 'gray',
        
    },
    twoPickers: {
        width: 200,
        height: 88,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
    },
    twoPickerItems: {
        height: 88,
        color: 'red'
    },
};

const mapStateToProps = (state) => {
    // The state.employeeForm came from reducers/index.js assignment line 7.
    const { name, phone, shift } = state.employeeForm; 
    return { name, phone, shift };
};

export default connect( // the secont {} are actions mapped.
    mapStateToProps, { employeeUpdate, employeeCreate } // Args.
)(EmployeeCreate);

