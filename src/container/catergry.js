
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Catergry from "../pages/catergryView";
import Goods from '../pages/goodsView';
import Search from '../pages/searchView';
import GoodsInfo from '../pages/goodInfoView'
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
    GoodsInfo:{
      screen:GoodsInfo,
      navigationOptions: {
        header:null,
        tabBarVisible: false,
      },
    }  
},{
    navigationOptions:{
      //code
    },  
  
}); 

export default IndexStack;

