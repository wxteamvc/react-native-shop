
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { 
  Text,
} from 'react-native';
import Home from "../pages/homeView";
import Ad from "../pages/adView";
import Goods from '../pages/goodsView';
import Search from '../pages/searchView';
import Coupons from '../pages/coupons';
import UserIndex from "../pages/userView";
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
  UserIndex: {
    screen: UserIndex,
    navigationOptions: {
      tabBarVisible: false,
      headerTitle:<Text style={{marginLeft:100,fontSize:16}}>个人中心</Text>
    },
  },}, {
    navigationOptions: {
    },
  });

export default HomeStack;

