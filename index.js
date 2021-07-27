/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import ConfigureAppStore from './src/redux/configureStore'

const store = ConfigureAppStore()

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
