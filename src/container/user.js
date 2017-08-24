import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import User from "../pages/userView";
import Register from "../component/register";
import Coupons from '../pages/coupons';


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
    Coupons: { 
      screen:Coupons,
      navigationOptions: {
        headerTitle:"优惠券领取中心",
        header:null,
        tabBarVisible: false,
      },
    },
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default HomeStack;