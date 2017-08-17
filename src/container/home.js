
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from "../pages/homeView";
import Ad from "../pages/adView";
import Goods from '../pages/goodsView';
import Search from '../pages/searchView';
import Coupons from '../pages/coupons';
import User from "../pages/userView";
const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  Ad: {
    screen: Ad,
    navigationOptions: {
      // header:null
      tabBarVisible: false,
    },
  },
  Goods: {
    screen: Goods,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  Coupons: {
    screen: Coupons,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  User: {
    screen: User,
    navigationOptions: {
      // header: null,
      tabBarVisible: false,
    },
  },
}, {
    navigationOptions: {
      //code
    },

  });

export default HomeStack;

