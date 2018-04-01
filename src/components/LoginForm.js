import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Container, Section, Input, Button } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
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
                <Section>
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
    mapStateToProps, 
    { emailChanged, passwordChanged }
)(LoginForm);
