
import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Catergry from "../pages/catergryView";
import Ad from "../pages/adView";
import Goods from '../pages/goodsView';

const IndexStack = StackNavigator({  
    Catergry: { 
      screen:Catergry,
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

export default IndexStack;

