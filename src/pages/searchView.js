"use strict"
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class Serach extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', height: 40 }}>
                    <TouchableOpacity style={{ flex: 0.15,alignItems: 'center', justifyContent: 'center'}} 
                     onPress={()=>this.props.navigation.navigate(this.props.navigation.state.params.back)}
                    >
                        <Icon name={'reply-all'} size={25} color='#fff' />
                    </TouchableOpacity>
                    <TextInput style={{ flex: 0.7, backgroundColor: '#fff', opacity: 0.4, padding: 0, paddingLeft: 20, borderRadius: 15, height: 30, }}
                        textAlignVertical='center'
                        placeholder='输入要搜索的内容'
                        placeholderTextColor='#000'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <TouchableOpacity
                        style={{ flex: 0.15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={'search'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


}