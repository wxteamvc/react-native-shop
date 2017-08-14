"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class Catergry extends Component{
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