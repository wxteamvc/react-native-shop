import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Cart from "../pages/cartView";
import Ad from "../pages/adView";
import Goods from '../pages/goodsView';

const CartStack = StackNavigator({  
    Cart: { 
      screen:Cart,
      navigationOptions: {
        // header:null
      },
    },
    Ad: { 
      screen:Ad,
      navigationOptions: {
        // header:null
      },
    },  
    Goods: { 
      screen:Goods,
      navigationOptions: {
        // header:null
      },
    },  
},{
    navigationOptions:{
      //code
    },  
  
}); 
export default CartStack;