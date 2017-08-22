"use strict";


import React, { Component } from 'react';

import {
    AppRegistry,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import Login from '../component/login';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCartInfo } from '../actions/cartAction';
import { ScreenWidth, ScreenHeight } from '../common/global';

class Cart extends Component {
    constructor(...props) {
        super(...props)
    }

    componentDidUpdate(nextProps) {
        let { data, userInfo } = this.props;
        //请求购物车
        if (data.status === "success" && userInfo.status === false) {
            this.props.dispatch(getCartInfo(data.token))
        }
    }

    render() {
        if (this.props.data.status == 'success') {
            return this._cart()
        } else {
            return (
                <Login {...this.props} />
            )
        }
    }

    _cart() {
        if (this.props.cartInfo.cartList.data.list.length > 0) {
            let cartList = this.props.cartInfo.cartList.data.list;//购物车列表
            let total = this.props.cartInfo.cartList.data.total;//购物车统计数量
            let totalprice = this.props.cartInfo.cartList.data.totalprice;//购物车统计价格
            let ischeckall = this.props.cartInfo.cartList.data.ischeckall;//购物车是否全选
            let cartListArr = [];
            for (let i = 0; i < cartList.length; i++) {
                cartListArr.push(
                    <View key={i} style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderBottomWidth: 1, borderColor: '#aaa' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                {cartList[i].selected == '1' ? <Icon name="check-circle" size={25} color={'#EF4F4F'} /> : <Icon name="circle-thin" size={25} />}
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Image source={{ uri: cartList[i].thumb }} style={{ width: 50, height: 50, borderRadius: 10 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text numberOfLines={2}>{cartList[i].title}</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <View>
                                <Text style={{ textAlign: 'center' }}>￥{cartList[i].marketprice}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Text style={{ flex: 1, borderWidth: 1, borderColor: '#aaa', textAlign: 'center', backgroundColor: '#eee', paddingTop: 3, paddingBottom: 3 }}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ flex: 1.5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#aaa', textAlign: 'center', paddingTop: 3, paddingBottom: 3 }}>{cartList[i].total}</Text>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Text style={{ flex: 1, borderWidth: 1, borderColor: '#aaa', textAlign: 'center', backgroundColor: '#eee', paddingTop: 3, paddingBottom: 3 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            }
            return (
                <View style={{ alignItems: 'center', height: ScreenHeight - 85 }}>
                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#aaa', marginBottom: 10 }}>
                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}><Text>我的购物车</Text></View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text>编辑</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ width: ScreenWidth }}>
                        {cartListArr}
                        <View style={{ height: 100 }}></View>
                    </ScrollView>
                    <View style={{ width: ScreenWidth, position: 'absolute', bottom: 0, flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderTopWidth: 1, borderColor: '#aaa' }}>
                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            <TouchableOpacity>
                                {ischeckall == '1' ? <Icon name="check-circle" size={25} color={'#EF4F4F'} /> : <Icon name="circle-thin" size={25} />}
                            </TouchableOpacity>
                            <Text style={{ paddingLeft: 10 }}>全选</Text>
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text>合计：<Text style={{ color: 'red' }}>￥{totalprice}</Text></Text>
                            <Text>不含运费</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Text style={{ textAlign: 'center', width: 100, borderRadius: 10, color: '#fff', backgroundColor: '#EF4F4F', padding: 10 }}>结算({total})</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Icon name="shopping-cart" size={80} color={'#aaa'} />
                    <Text style={{ color: '#aaa' }}>购物车空空如也~</Text>
                </View>
            )
        }

    }

}

function mapStateToProps(state) {
    return {
        data: state.User,
        userInfo: state.userInfo,
        cartInfo: state.CartReducer
    }
}

export default connect(mapStateToProps)(Cart);