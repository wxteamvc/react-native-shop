import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import User from "../pages/userView";
import Ad from "../pages/adView";
import Goods from '../pages/goodsView';

const HomeStack = StackNavigator({  
    User: { 
      screen:User,
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