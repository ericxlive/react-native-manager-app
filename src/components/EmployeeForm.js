import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Section, Input } from './common';

class EmployeeForm extends Component {

    render() {
        return (
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
        height: 44,
        paddingTop: 10,
        textAlignVertical: 'center'
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
        color: 'black',
        
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
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(
    mapStateToProps, 
    { employeeUpdate }
)(
    EmployeeForm
);
