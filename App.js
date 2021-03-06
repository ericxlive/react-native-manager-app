import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // This is called a middleware. Then report middlew
import reducers from './src/reducers';
import Router from './src/Router';

/**
 * Default class. Both ios.index.js and android.index.js call this component.
 */
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
    /**
     * The second argument is {}, which is any initial state we want to enter to my reducer.
     * Second argument: any reducer state we might want to pass.
     *
     * Hulk: 1
     */
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
