import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import User from "../pages/userView";

const HomeStack = StackNavigator({  
    User: { 
      screen:User,
      navigationOptions: {
        header:null
      },
    },
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default HomeStack;