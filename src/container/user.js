import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import User from "../pages/userView";
import Register from "../component/register";

const HomeStack = StackNavigator({  
    User: { 
      screen:User,
      navigationOptions: {
        header:null
      },
    },
    Register: { 
      screen:Register,
      navigationOptions: {
        headerTitle:"用户注册"
        //header:null
      },
    },
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default HomeStack;