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
    TextInput,
} from 'react-native';
import { DOMAIN, ScreenWidth, ScreenHeight } from '../common/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconOc from 'react-native-vector-icons/dist/Octicons';
import { connect } from 'react-redux'
import { searchHistory, clear } from '../actions/searchAction'
class Serach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            hasKeyWord: false,
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
            hasKeyWord: true,
        })
    }

    jump() {
        if (this.state.hasKeyWord) {
            this.props.navigation.navigate('Product', { from: 'search', val: this.state.text })
        } else {
            alert('请输入关键词')
        }
    }

    _history() {
        var content = [];
        for (var i = 0; i < this.props.history.keyWords.length; i++) {
            content.push(
                <View key={i} style={{ borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10, paddingTop: 10 }}>
                    <Text style={{ marginLeft: 10 }}>{this.props.history.keyWords[i]}</Text>
                </View>
            )
        }
        return (content)
    }

    clear() {
        this.props.dispatch(clear())
    }

    _renderHistory() {
        if (this.props.history.hasHistory) {
            return (
                <View>
                    <View style={{ borderTopWidth: 1, borderColor: '#ccc', marginTop: 20 }}>
                        <Text style={{ marginTop: 20, marginLeft: 10 }}>搜索历史:</Text>
                        {this._history()}
                    </View>
                    <TouchableOpacity style={{ height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} onPress={() => { this.clear() }}>
                        <IconOc name={'trashcan'} size={16} /><Text>清空历史记录</Text>
                    </TouchableOpacity>
                </View>

            )
        } else {
            return false;

        }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                        keyboardType='ascii-capable'
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => { this.props.dispatch(searchHistory(this.state.text)) }}
                        style={{ flex: 0.15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={'search'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View>
                        <Text style={{ marginTop: 20, marginLeft: 20 }}>热门推荐</Text>
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            {this._hot()}
                        </View>

                        {this._renderHistory()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.Init.index,
        history: state.History,
    }
}

export default connect(mapStateToProps)(Serach);