"use strict";


import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';
import { search } from '../actions/searchAction';
import { getCatInfo } from '../actions/initAction';
import { connect } from 'react-redux';
import { ScreenWidth } from '../common/global';
import Icon from 'react-native-vector-icons/FontAwesome';

class Goods extends Component {

    constructor(...props) {
        super(...props)
        this.state = {
            orderBy: 'default',          //默认综合排序default;另外销量：sale;价格：price;筛选：filter
            priceOrder: null,            //up价格升，down价格降
            filterShow: false,           //筛选框显示状态
            leftSelectedBar: null,       //一级分类选中状态
            leftSelectedBarId: null,     //一级分类id
            rightSelectedBarId: null,    //二级分类id
            showType:true,               //显示大图为true,小图为false，默认大图
            search: {                    //筛选条件
                keywords: "",
                isrecommand: "",
                ishot: "",
                isnew: "",
                isdiscount: "",
                issendfree: "",
                istime: "",
                cate: "",
                order: "",
                by: "",
                merchid: "",
                page: "1",
                nowtime: "",
            }
        }
    }

    componentDidMount() {
        this.setState(Object.assign(
            this.state.search, this.props.navigation.state.params.search
        ))
        this.props.dispatch(search(this.state.search));
    }

    render() {
        return (
            <View>
                {this._search()}
                {this._orderBy()}
                {this._goodsList()}
                {this._filterView()}
            </View>
        );
    }

    _search(){
        return(
            <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,height:51}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Icon name='angle-left' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:8,paddingLeft:10,paddingRight:10,marginRight:10,flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:'#ccc'}}>
                    <View style={{flex:1}}><Icon name='search' size={20}/></View>
                    <View style={{flex:12}}>
                        <TextInput
                            style={{color:'#666'}}
                            onChangeText={(text) => this.setState({
                                search: {
                                    ...this.state.search,
                                    keywords: text
                                }
                            })}
                            placeholder ='输入关键字'
                            underlineColorAndroid="transparent"
                            returnKeyType='search'
                            returnKeyLabel='搜索'
                            onSubmitEditing={()=>this.props.dispatch(search(this.state.search))}
                        />
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{this.setState({showType:!this.state.showType})}}>
                        <Icon name={this.state.showType==true?'th-list':'th-large'} size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    _changeSearch(key) {
        this.setState({
            search: {
                ...this.state.search,
                [key]: this.state.search[key] == 1 ? "" : 1,
            }
        })
    }

    _filterView() {
        if (this.state.filterShow == true && this.state.orderBy == 'filter') {
            return (
                <View style={{ width: ScreenWidth, position: 'absolute', backgroundColor: '#fff', top: 45 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                this._changeSearch('isrecommand');
                            }}><Text style={{ borderWidth: 1, padding: 5, borderColor: this.state.search.isrecommand == 1 ? 'red' : '#ccc', color: this.state.search.isrecommand == 1 ? 'red' : null, borderRadius: 10, textAlign: 'center' }}>推荐商品</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                this._changeSearch('isnew');
                            }}><Text style={{ borderWidth: 1, padding: 5, borderColor: this.state.search.isnew == 1 ? 'red' : '#ccc', color: this.state.search.isnew == 1 ? 'red' : null, borderRadius: 10, textAlign: 'center' }}>新品上市</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                this._changeSearch('ishot');
                            }}><Text style={{ borderWidth: 1, padding: 5, borderColor: this.state.search.ishot == 1 ? 'red' : '#ccc', color: this.state.search.ishot == 1 ? 'red' : null, borderRadius: 10, textAlign: 'center' }}>热卖商品</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                this._changeSearch('isdiscount');
                            }}><Text style={{ borderWidth: 1, padding: 5, borderColor: this.state.search.isdiscount == 1 ? 'red' : '#ccc', color: this.state.search.isdiscount == 1 ? 'red' : null, borderRadius: 10, textAlign: 'center' }}>促销商品</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                this._changeSearch('issendfree');
                            }}><Text style={{ borderWidth: 1, padding: 5, borderColor: this.state.search.issendfree == 1 ? 'red' : '#ccc', color: this.state.search.issendfree == 1 ? 'red' : null, borderRadius: 10, textAlign: 'center' }}>卖家包邮</Text></TouchableOpacity>
                        </View>
                        <View style={{ width: ScreenWidth / 3, padding: 5 }}>
                            <TouchableOpacity onPress={() => {
                                this._changeSearch('istime');
                            }}><Text style={{ borderWidth: 1, padding: 5, borderColor: this.state.search.istime == 1 ? 'red' : '#ccc', color: this.state.search.istime == 1 ? 'red' : null, borderRadius: 10, textAlign: 'center' }}>限时抢购</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ textAlign: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc', padding: 5 }}>选择分类</Text>
                        </View>
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 1, borderRightWidth: 1, borderColor: '#ccc' }}>
                                {/* 一级分类列表 */}
                                {this._firstCatList()}

                            </View>
                            <View style={{ flex: 1 }}>
                                {/* 二级分类列表 */}
                                {this._secondCatList()}
                            </View>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, flexDirection: 'row', padding: 10, borderColor: '#ccc' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.setState({ filterShow: false })}>
                                <Text style={{ textAlign: 'left' }}>取消筛选</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => {
                                this.setState({ filterShow: false });
                                this.props.dispatch(search(this.state.search))
                            }}>
                                <Text style={{ textAlign: 'right', color: 'red' }}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }

    //一级分类列表
    _firstCatList() {
        if (this.props.data.status == 'success') {
            var firstCatList = this.props.data.data.parent[0];
            var firstCatListArr = [];
            for (let i = 0; i < firstCatList.length; i++) {
                firstCatListArr.push(
                    <View key={i} style={{ margin: 5, padding: 5, backgroundColor: this.state.leftSelectedBar == i ? '#ccc' : null }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                leftSelectedBar: i,
                                leftSelectedBarId: firstCatList[i].id,
                                rightSelectedBarId: null,
                                search: {
                                    ...this.state.search,
                                    cate: firstCatList[i].id,
                                }
                            })
                        }}>
                            <Text style={{ textAlign: 'center' }}>{firstCatList[i].name}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        }
        return firstCatListArr;
    }

    //二级分类列表
    _secondCatList() {
        if (this.props.data.status == 'success' && this.state.leftSelectedBarId != null) {
            var secondCatList = this.props.data.data.children[this.state.leftSelectedBarId];
            var secondCatListArr = [];
            for (let i = 0; i < secondCatList.length; i++) {
                secondCatListArr.push(
                    <View key={i} style={{ margin: 5, padding: 5, backgroundColor: this.state.rightSelectedBarId == secondCatList[i].id ? '#ccc' : null }}>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                rightSelectedBarId: secondCatList[i].id,
                                search: {
                                    ...this.state.search,
                                    cate: secondCatList[i].id,
                                }
                            })
                        }}>
                            <Text style={{ textAlign: 'center' }}>{secondCatList[i].name}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        }
        return secondCatListArr;
    }

    // 排序视图 
    _orderBy() {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 45, alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#ccc' }}>
                <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#ccc' }}>
                    <TouchableOpacity onPress={
                        () => {
                            this.setState({ orderBy: 'default' });
                            this.props.dispatch(search(this.state.search));
                        }
                    }>
                        <Text style={{ color: this.state.orderBy == 'default' ? 'red' : null, fontSize: 16 }}>综合</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#ccc' }}>
                    <TouchableOpacity onPress={
                        () => {
                            this.setState({ orderBy: 'sale' });
                            this.props.dispatch(search(
                                Object.assign(
                                    this.state.search,
                                    { order: 'sales', by: 'desc' }
                                )
                            ));
                        }
                    }>
                        <Text style={{ color: this.state.orderBy == 'sale' ? 'red' : null, fontSize: 16 }}>销量</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this._priceOrder()}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: this.state.orderBy == 'price' ? 'red' : null, fontSize: 16 }}>价格</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                {this._iconUpDown()}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', borderLeftWidth: 1, borderColor: '#ccc' }}>
                    <TouchableOpacity onPress={
                        () => {
                            this.setState({ orderBy: 'filter', filterShow: true,search:{
                                ...this.state.search,
                                keywords:""
                            } });
                            this.props.dispatch(getCatInfo())
                        }}>
                        <Text style={{ color: this.state.orderBy == 'filter' ? 'red' : null, fontSize: 16 }}>筛选</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //价格升降图标
    _iconUpDown() {
        if (this.state.priceOrder == 'down' && this.state.orderBy == 'price') {
            return (
                <Text style={{ color: 'red', fontSize: 10, height: 11 }}>  ▲</Text>
            )
        } else if (this.state.priceOrder == 'up' && this.state.orderBy == 'price') {
            return (
                <Text style={{ color: 'red', fontSize: 10, height: 11 }}>  ▼</Text>
            )
        }
    }

    //价格升降排序
    _priceOrder() {
        if (this.state.priceOrder == null) {
            this.setState({
                orderBy: 'price',
                priceOrder: 'up'
            });
            this.props.dispatch(search(
                Object.assign(
                    this.state.search,
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
                    this.state.search,
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
                    this.state.search,
                    { order: 'marketprice', by: 'desc' }
                )
            ));
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
                        <View style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}>
                            <TouchableOpacity>
                                <Image source={{ uri: goodsListObj[i].thumb }} style={{ width: ScreenWidth / 2 - 10, height: ScreenWidth / 2 - 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 5 }}>
                            <View>
                                <TouchableOpacity>
                                    <Text numberOfLines={1}>{goodsListObj[i].title}</Text>
                                </TouchableOpacity>
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
                <View style={{ flexDirection: 'row' ,flexWrap:'wrap'}}>{goodsListArr}</View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        goodsList: state.GoodsList,
        data: state.Init.catList
    }
}

export default connect(mapStateToProps)(Goods);