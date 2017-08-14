/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

//import Store from "./store/store";
//import { Provider } from 'react-redux';
import App from './app';

export default class Root extends Component {
  render() {
    return (
        //<Provider store={Store}>
            <App/>
        //</Provider>
    );
  }
}
AppRegistry.registerComponent('renren', () => Root);
