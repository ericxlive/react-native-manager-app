import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDSyqFb7ujjbJy06H-Q4SvR1pQ9nUS7Iis',
      authDomain: 'manager-5906a.firebaseapp.com',
      databaseURL: 'https://manager-5906a.firebaseio.com',
      projectId: 'manager-5906a',
      storageBucket: 'manager-5906a.appspot.com',
      messagingSenderId: '710985290308'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
