
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Catergry from "../pages/catergryView";
import Goods from '../pages/goodsView';
import Search from '../pages/searchView';

const IndexStack = StackNavigator({  
    Catergry: { 
      screen:Catergry,
      navigationOptions: {
        header:null
      },
    },
    Search:{
      screen:Search,
      navigationOptions: {
        header:null,
        tabBarVisible: false,
      },
    },
    Goods: { 
      screen:Goods,
      navigationOptions: {
        header:null,
        tabBarVisible: false,
      },
    },  
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default IndexStack;

