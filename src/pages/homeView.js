"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//接收参数{this.props.navigation.state.params.****}
export default class Home extends Component{
    render(){
        return (
            <View>

                <Text>首页</Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("Goods",{'id':'12'})
                    }}
                >

                    <Text>跳到商品详情页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}