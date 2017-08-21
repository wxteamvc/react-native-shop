import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Cart from "../pages/cartView";
import Ad from "../pages/adView";
const CartStack = StackNavigator({  
    Cart: { 
      screen:Cart,
      navigationOptions: {
        header:null
      },
    },
},{
    navigationOptions:{
      //code
    },  
  
}); 
export default CartStack;