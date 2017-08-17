"use strict"
import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ScreenWidth } from '../common/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class Show extends Component {

    product() {
        var goods = this.props.data.result.list;
        if (goods.length >= 10) {
            var num = 10;
        } else {
            var num = goods.length;
        }
        var goodslist = [];
        for (let i = 0; i < num; i++) {
            goodslist.push(
                <View  key={i} style={{ width: ScreenWidth / 2, padding: 5 }}>
                    <TouchableOpacity >
                        <Image source={{ uri: goods[i].thumb }} style={{ width: ScreenWidth / 2 - 10, height: ScreenWidth / 2 - 20 }} />
                        <Text numberOfLines={1}>{goods[i].title}</Text>
                        <Text style={{ color: 'red', marginTop: 5}}>{goods[i].marketprice}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position: 'absolute', bottom: 5, right: 10}}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', borderRadius: 10, width: 20, height: 20,}}>
                            <Icon name={'shopping-cart'} color={'#fff'} />
                        </View>
                    </TouchableOpacity>
                </View>

            )
        }
        return goodslist
    }



    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: '#ccc', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18 }}>购•</Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>{this.props.text}</Text>
                    </View>
                    <Text style={{ color: 'red' }}>{this.props.texten}</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.product()}
                </View>
            </View>
        )
    }
}




