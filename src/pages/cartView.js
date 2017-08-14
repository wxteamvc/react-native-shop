"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class Cart extends Component{
    render(){
        return (
            <View>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("Goods")
                    }}
                >
                <Text>详情页</Text>
                </TouchableOpacity>
                <Text>购物车</Text>
            </View>
        );
    }
}