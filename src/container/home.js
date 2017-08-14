
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Home from "../pages/homeView";
import Ad from "../pages/adView";
import Goods from '../pages/goodsView';

const HomeStack = StackNavigator({  
    Home: { 
      screen:Home,
      navigationOptions: {
        header:null
      },
    },
    Ad: { 
      screen:Ad,
      navigationOptions: {
        // header:null
        tabBarVisible: false,
      },
    },  
    Goods: { 
      screen:Goods,
      navigationOptions: {
        // header:null
        tabBarVisible: false,
      },
    },  
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default HomeStack;

