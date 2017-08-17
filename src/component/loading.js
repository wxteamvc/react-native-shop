"use strict"
import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    Image,
} from 'react-native';
import { ScreenWidth} from '../common/global';
export default class Loading extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#fff'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={100}></ActivityIndicator>
                    <Text style={{marginTop:30}}>亲 别着急哦 页面正在加载中...</Text>
                </View>
            </View>
        )
    }
}




