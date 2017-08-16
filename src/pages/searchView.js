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
import { DOMAIN, ScreenWidth, ScreenHeight } from '../common/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
class Serach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            hasKeyWord:false,
        }

    }

    _hot() {
        let recommands = this.props.data.data.recommands;
        if (recommands.length >= 4) {
            var num = 4;
        } else {
            var num = recommands.length
        }
        var hotlist = [];
        for (var i = 0; i < num; i++) {
            hotlist.push(
                <View key={i} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: DOMAIN + recommands[i].thumb }} style={{ width: 80, height: 80, borderRadius: 10 }} />
                </View>
            )
        }
        return (hotlist)
    }

    getText(text) {
        this.setState({
            text: text,
            hasKeyWord:true,
        })
    }

    jump(){
        if(this.state.hasKeyWord){
            this.props.navigation.navigate('Product',{from:'search',val:this.state.text})
        }else{
            alert('请输入关键词')
        }
    }

    render() {
        return (
            <View style={{ width: ScreenWidth, height: ScreenHeight, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', height: 40 }}>
                    <TouchableOpacity style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon name={'reply-all'} size={25} color='#fff' />{console.log(this.props)}
                    </TouchableOpacity>
                    <TextInput style={{ flex: 0.7, backgroundColor: '#fff', opacity: 0.4, padding: 0, paddingLeft: 20, borderRadius: 15, height: 30, }}
                        textAlignVertical='center'
                        placeholder='输入要搜索的内容'
                        placeholderTextColor='#000'
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.getText(text)}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={()=>{this.jump()}}
                        style={{ flex: 0.15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={'search'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={{ marginTop: 20, marginLeft: 20 }}>热门推荐</Text>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        {this._hot()}
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.Init.index
    }
}

export default connect(mapStateToProps)(Serach);