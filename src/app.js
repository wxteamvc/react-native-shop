/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Index from './container/index';
import Catergry from './container/catergry';
// import Cart from './container/cart';
// import User from './container/user';


const AppTab = TabNavigator({  
    Index:{  
      screen:Index,
      navigationOptions:({navigation}) => ({
        tabBarLabel:'首页',  
        tabBarIcon:({focused,tintColor}) => ( 
           <Icon name="home" size={25} color={tintColor}/>
        )    
       }), 
    },
    Catergry:{  
      screen:Catergry,  
      navigationOptions:({navigation}) => ({  
        tabBarLabel:'分类',  
        tabBarIcon:({focused,tintColor}) => ( 
          <Icon name="list" size={25} color={tintColor}/>
        )  
      }),  
    },
    
    // Cart:{  
    //   screen:Cart,  
    //   navigationOptions:({navigation}) => ({  
    //     tabBarLabel:'购物车',  
    //     tabBarIcon:({focused,tintColor}) => ( 
    //        <Icon name="cart" size={25} color={tintColor}/>
    //     )  
    //   }),  
    // },
    // User:{  
    //   screen:User,  
    //   navigationOptions:({navigation}) => ({  
    //     tabBarLabel:'会员中心',  
    //     tabBarIcon:({focused,tintColor}) => ( 
    //       <Icon name="user-o" size={25} color={tintColor}/>
    //     )  
    //   }),  
    // },    
  
   
},{  
    // animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: 'red', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        showLabel:true,
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height:60
        },
        labelStyle: {
            fontSize: 15, // 文字大小
            marginTop:-3
        },
        iconStyle :{
            width:25,
            height:25
        },
        // tabStyle :{
        //     width:width/5
        // }
    },
});

export default AppTab;