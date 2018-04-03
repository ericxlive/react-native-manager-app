import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Section, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props; // E6 
        this.props.loginUser({ email, password });
    }

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner />;
        } 
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign-In
            </Button>
        );
    }

    render() {
        return (
            <Container>
                <Section>
                    <Input 
                        label="Email" 
                        placeholder="example@email.com" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </Section>
                <Section>
                    <Input 
                        secureTextEntry 
                        label="Password" 
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </Section>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <Section>
                    {this.renderLoginButton()}
                </Section>
            </Container>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

const mapStateToProps = ({ auth }) => { // put piece of state into our component.
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(
    mapStateToProps, // email and password 
    { 
        emailChanged, 
        passwordChanged, 
        loginUser 
    } // actions.
)(LoginForm);
