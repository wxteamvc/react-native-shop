"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';


export default class Catergry extends Component{
        static navigationOptions = ({navigation}) =>({ 
        //title
        // title:'标题',
        // 导航栏的标题, 可以是字符串也可以是个组件 会覆盖 title 的值 
        headerTitle: 'aaa',
        //左上角的返回键文字, 默认是上一个页面的title  IOS 有效
        headerBackTitle : "返回",
        //按压返回按钮显示的颜色 API > 5.0 有效
         headerPressColorAndroid : '#00BBF5',
         //返回按钮的颜色
         headerTintColor : '#00BBF5',
         //右边按钮
         headerRight:(  
         	<View style={{marginRight:10}}>
                <Button title="点我" onPress={() => alert("hello")}/>  
         	</View>   
        ),

    });
    render(){
        return (
            <View>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("Goods")
                    }}
                >
                <Text>调到详情也</Text>
                </TouchableOpacity>
                <Text>分类也</Text>
            </View>
        );
    }
}