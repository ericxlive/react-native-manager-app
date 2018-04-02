import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Section, Input, Button } from './common';

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
                <Section onPress={this.onButtonPress.bind(this)}>
                    <Button>Sign-In</Button>
                </Section>
            </Container>

        );
    }
}

const mapStateToProps = state => ({
        email: state.auth.email,
        password: state.auth.password
    });

export default connect(
    mapStateToProps, // email and password 
    { 
        emailChanged, 
        passwordChanged, 
        loginUser 
    } // actions.
)(LoginForm);
