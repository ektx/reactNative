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