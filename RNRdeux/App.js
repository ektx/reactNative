/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://www.youtube.com/watch?v=9mlwjZL3Fmw
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './demo/store.js'; //Import the store
import Home from './demo/components/home.js' //Import the component file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}