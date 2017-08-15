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
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { DOMAIN, ScreenWidth } from '../common/global';
import { connect } from 'react-redux'
import Banner from '../component/banner';
import { getinfo } from '../actions/initAction'
import Swiper from 'react-native-swiper';
import Search from '../component/search';
//接收参数{this.props.navigation.state.params.****}
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchStyle: {
                backgroundColor: '#ccc',
                opacity: 0.4
            },
        }
    }
    componentDidMount() {
        if(!this.props.data.hasInfo)
           this.props.dispatch(getinfo())  
    }
    _event = ({ item }) => {
        return (
            <Image source={{ uri: DOMAIN + item.thumb }} resizeMode={'stretch'} style={{ width: ScreenWidth, height: 150, marginBottom: 5 }} />
        )
    }
    _hotList({ item }) {
        return (<View style={{ alignItems: 'center', borderRightColor: '#ccc', borderRightWidth: 1 }}>
            <Image source={{ uri: DOMAIN + item.thumb }} style={{ width: ScreenWidth / 3 - 1, height: ScreenWidth / 3, padding: 30 }}></Image>
            {/* <Text style={{color:'#fff',backgroundColor:'#660099',padding:2,position:'absolute',top:width/3-25,left:0}}>{item.type}</Text> */}
            <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>{item.productprice}</Text>
            <Text style={{ textDecorationLine: 'line-through' }}>{item.marketprice}</Text>
        </View>)

    }
    searchBackground(e) {
        if (e.nativeEvent.contentOffset.y > 170) {
            this.setState({
                searchStyle: {
                    backgroundColor: 'red',
                    opacity: 0.6
                }
            })
        } else {
            this.setState({
                searchStyle: {
                    backgroundColor: '#ccc',
                    opacity: 0.4
                },

            })
        }
    }
    render() {
        if (this.props.data.status == 'success') {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={[this.state.searchStyle, { position: 'absolute', top: 0, left: 0, zIndex: 100, width: ScreenWidth, height: 40, justifyContent: 'center' }]}>
                        <Search lbtn={'扫码'} search={'星空乐园系列'} h={30} rbtn={'搜索'} navigate={this.props.navigation} page={'Home'} />
                    </View>
                    <ScrollView onScroll={e => { this.searchBackground(e) }}>
                        <Banner banner={this.props.data.data.advs} />
                        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../images/my.png')} style={{ width: 50, height: 50 }}></Image>
                                    <Text>个人中心</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../images/kf.png')} style={{ width: 50, height: 50 }}></Image>
                                    <Text>在线客服</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../images/yh.png')} style={{ width: 50, height: 50 }}></Image>
                                    <Text>优惠券</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../images/cj.png')} style={{ width: 50, height: 50 }}></Image>
                                    <Text>免费抽奖</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../images/qd.png')} style={{ width: 50, height: 50 }}></Image>
                                    <Text>签到积分</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={this.props.data.data.banners}
                            renderItem={this._event}
                            keyExtractor={(item, index) => index}
                        >
                        </FlatList>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                            source={require('../images/hotdot.jpg')}
                            style={{width:60,height:30,marginRight:10}}
                            />
                            <Icon
                            name={'volume-up'}
                            size={16}
                            color={'red'}
                            />
                            <Text></Text>
                            </View>
                        <FlatList
                            data={this.props.data.data.recommands}
                            horizontal={true}
                            renderItem={this._hotList}
                            keyExtractor={(item, index) => index}
                            showsHorizontalScrollIndicator={false}
                        >
                        </FlatList>
                    </ScrollView>
                </View>
            );
        } else {
            return (
                <View>
                    <Text>LOADING....</Text>

                </View>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        data: state.Init.index
    }
}


export default connect(mapStateToProps)(Home);



