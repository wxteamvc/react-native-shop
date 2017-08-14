import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import AppTab from '../app';

const Cart = StackNavigator({  
    'AppTab': { 
      screen:AppTab,
      navigationOptions: {
        header:null
      },
    },  
    // 'goodsList': {
    //   screen: List,
    //   navigationOptions: {
    //     gesturesEnabled:true,
    //   },
    // },  
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default Cart;