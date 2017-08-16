"use strict";


import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { search } from '../actions/searchAction';
import { connect } from 'react-redux';
import { ScreenWidth } from '../common/global';
import Icon from 'react-native-vector-icons/FontAwesome';


class Goods extends Component {

    constructor(...props) {
        super(...props)
        this.state = {
            orderBy: 'default',  //默认综合排序default;另外销量：sale;价格：price;筛选：filter
            priceOrder: null,    //up价格升，down价格降
            filterShow: false,    //筛选框显示状态
        }
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.dispatch(search(this.props.navigation.state.params.search));
    }

    render() {
        return (
            <View>
                {this._orderBy()}
                {this._goodsList()}
                {this._filterView()}
            </View>
        );
    }

    _filterView() {
        if (this.state.modelShow == true && this.state.orderBy == 'filter') {
            return (
                <View style={{ width: ScreenWidth, position: 'absolute', backgroundColor: '#fff', top: 45 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity><Text style={{ borderWidth: 1, padding: 5, borderColor: '#ccc', borderRadius: 10, textAlign: 'center' }}>推荐商品</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity><Text style={{ borderWidth: 1, padding: 5, borderColor: '#ccc', borderRadius: 10, textAlign: 'center' }}>新品上市</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity><Text style={{ borderWidth: 1, padding: 5, borderColor: '#ccc', borderRadius: 10, textAlign: 'center' }}>热卖商品</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity><Text style={{ borderWidth: 1, padding: 5, borderColor: '#ccc', borderRadius: 10, textAlign: 'center' }}>促销商品</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity><Text style={{ borderWidth: 1, padding: 5, borderColor: '#ccc', borderRadius: 10, textAlign: 'center' }}>卖家包邮s</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity><Text style={{ borderWidth: 1, padding: 5, borderColor: '#ccc', borderRadius: 10, textAlign: 'center' }}>限时抢购</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ textAlign: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc', padding: 5 }}>选择分类</Text>
                        </View>
                        <View style={{ padding: 5 ,flexDirection:'row'}}>
                            <View style={{flex:1,borderRightWidth:1}}>
                                <TouchableOpacity>
                                    <Text style={{textAlign:'center'}}>一级分类</Text>
                                </TouchableOpacity>    
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity>
                                    <Text style={{textAlign:'center'}}>二级分类</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{borderTopWidth:1,flexDirection:'row',padding:10}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Text style={{textAlign:'left'}}>取消筛选</Text>
                            </TouchableOpacity>       
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Text style={{textAlign:'right',color:'red'}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }

    // 排序视图 
    _orderBy() {
        return (

            <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 45, alignItems: 'center', borderBottomWidth: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1 }}>
                    <TouchableOpacity onPress={
                        () => {
                            this.setState({ orderBy: 'default' });
                            this.props.dispatch(search(this.props.navigation.state.params.search));
                        }
                    }>
                        <Text style={{ color: this.state.orderBy == 'default' ? 'red' : null }}>综合</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1 }}>
                    <TouchableOpacity onPress={
                        () => {
                            this.setState({ orderBy: 'sale' });
                            this.props.dispatch(search(
                                Object.assign(
                                    this.props.navigation.state.params.search,
                                    { order: 'sales', by: 'desc' }
                                )
                            ));
                        }
                    }>
                        <Text style={{ color: this.state.orderBy == 'sale' ? 'red' : null }}>销量</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this._priceOrder()}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: this.state.orderBy == 'price' ? 'red' : null }}>价格</Text>
                            </View>
                            <View>
                                <Text style={{ color: this.state.priceOrder == 'up' && this.state.orderBy == 'price' ? 'red' : null }}>  ▲</Text>
                                <Text style={{ color: this.state.priceOrder == 'down' && this.state.orderBy == 'price' ? 'red' : null }}>  ▼</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', borderLeftWidth: 1 }}>
                    <TouchableOpacity onPress={() => this.setState({ orderBy: 'filter', modelShow: true })}>
                        <Text style={{ color: this.state.orderBy == 'filter' ? 'red' : null }}>筛选</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    //价格升降排序
    _priceOrder() {
        if (this.state.orderBy != 'price') {
            if (this.state.priceOrder == null) {
                this.setState({
                    orderBy: 'price',
                    priceOrder: 'up'
                });
                this.props.dispatch(search(
                    Object.assign(
                        this.props.navigation.state.params.search,
                        { order: 'marketprice', by: 'desc' }
                    )
                ));
            } else if (this.state.priceOrder == 'up') {
                this.setState({
                    orderBy: 'price',
                    priceOrder: 'down'
                });
                this.props.dispatch(search(
                    Object.assign(
                        this.props.navigation.state.params.search,
                        { order: 'marketprice', by: 'asc' }
                    )
                ));
            } else {
                this.setState({
                    orderBy: 'price',
                    priceOrder: 'up'
                });
                this.props.dispatch(search(
                    Object.assign(
                        this.props.navigation.state.params.search,
                        { order: 'marketprice', by: 'desc' }
                    )
                ));
            }
        } else {
            if (this.state.priceOrder == null) {
                this.setState({
                    priceOrder: 'up'
                });
                this.props.dispatch(search(
                    Object.assign(
                        this.props.navigation.state.params.search,
                        { order: 'marketprice', by: 'desc' }
                    )
                ));
            } else if (this.state.priceOrder == 'up') {
                this.setState({
                    priceOrder: 'down'
                });
                this.props.dispatch(search(
                    Object.assign(
                        this.props.navigation.state.params.search,
                        { order: 'marketprice', by: 'asc' }
                    )
                ));
            } else {
                this.setState({
                    priceOrder: 'up'
                });
                this.props.dispatch(search(
                    Object.assign(
                        this.props.navigation.state.params.search,
                        { order: 'marketprice', by: 'desc' }
                    )
                ));
            }
        }
    }

    // 商品列表视图
    _goodsList() {
        let goodsList = this.props.goodsList;
        if (goodsList.status == 'success') {
            var goodsListObj = goodsList.data.result.list;
            var goodsListArr = [];
            for (let i = 0; i < goodsListObj.length; i++) {
                goodsListArr.push(
                    <View key={i} style={{ width: ScreenWidth / 2 }}>
                        <View style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}><Image source={{ uri: goodsListObj[i].thumb }} style={{ width: ScreenWidth / 2 - 10, height: ScreenWidth / 2 - 5 }} /></View>
                        <View style={{ padding: 5 }}>
                            <View>
                                <Text numberOfLines={1}>{goodsListObj[i].title}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View style={{ flex: 5 }}>
                                    <Text style={{ color: 'red' }}>￥{goodsListObj[i].marketprice}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={{ width: 24, height: 24, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 2 }}>
                                        <TouchableOpacity>
                                            <Icon name="shopping-cart" size={15} color={'#fff'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </View>
                )
            }

        }

        return (
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>{goodsListArr}</View>
            </ScrollView>
        )

    }
}

function mapStateToProps(state) {
    return {
        goodsList: state.GoodsList
    }
}

export default connect(mapStateToProps)(Goods);