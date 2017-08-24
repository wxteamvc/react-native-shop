"use strict";

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    RefreshControl,
    ActivityIndicator,
    WebView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconEvil from 'react-native-vector-icons/dist/EvilIcons';
import Swiper from 'react-native-swiper';
import { DOMAIN, ScreenWidth, ScreenHeight, StatusBarHeight, GOODSPICKER } from '../common/global';
import { connect } from 'react-redux';
import { PullView } from 'react-native-pull';
import { goodsinfo, replyStatus } from '../actions/goodsInfo'
class GoodsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            goodsNum: 1,
            showClass: false,
            specs: {},
            specsValue: {},
        }
    }


    componentWillMount() {
        let { info } = this.props.navigation.state.params;
        this.info = info
        this.props.dispatch(replyStatus())
    }


    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
                <View style={{ flex: 1, }}>
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', }}>
                        <TouchableOpacity style={{ flex: 0.125, }}>
                            <Icon name={'chevron-left'} size={20} color={'#ccc'} />
                        </TouchableOpacity>
                        <View style={[{ borderColor: this.state.page == 1 ? 'red' : '#ccc', }, styles.top]}>
                            <TouchableOpacity onPress={() => { this.setState({ page: 1 }) }}>
                                <Text style={{ fontSize: 18, color: this.state.page == 1 ? 'red' : '#000', }}>商品</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[{ borderColor: this.state.page == 2 ? 'red' : '#ccc', }, styles.top]}>
                            <TouchableOpacity onPress={() => { this.setState({ page: 2 }) }}>
                                <Text style={{ fontSize: 18, color: this.state.page == 2 ? 'red' : '#000', }}>详情</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[{ borderColor: this.state.page == 3 ? 'red' : '#ccc', }, styles.top]}>
                            <TouchableOpacity onPress={() => { this.setState({ page: 3 }) }}>
                                <Text style={{ fontSize: 18, color: this.state.page == 3 ? 'red' : '#000', }}>参数</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this._show()}
                    <View style={[{ height: 50, }, styles.rowCenter]}>
                        <View style={[{ flex: 0.4 }, styles.rowCenter]}>
                            <TouchableOpacity style={[{ flex: 1 }, styles.center]}>
                                <Icon name={'heart-o'} size={20} color={'#ccc'} />
                                <Text>关注</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ flex: 1 }, styles.center]}>
                                <Icon name={'shopping-bag'} size={20} color={'#ccc'} />
                                <Text>店铺</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ flex: 1 }, styles.center]}>
                                <Icon name={'shopping-cart'} size={20} color={'#ccc'} />
                                <Text>购物车</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[{ flex: 0.3, backgroundColor: '#FE9402', height: 50 }, styles.center]}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>加入购物车</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ flex: 0.3, backgroundColor: '#FD5555', height: 50 }, styles.center]}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>立即购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this._goodClass()}
            </View>
        );
    }

    getGoodsPicker() {
        if (Object.keys(this.state.specs).length == 0) {
            let key = Object.keys(this.props.user.token)
            let value = this.props.user.token[key]
            fetch(GOODSPICKER + '&id=' + this.info.goods.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: key + '=' + value
            })
                .then(response => response.json())
                .then(    
                response => {
                    console.log(response)
                    //请求成功
                    this.picker = response;
                    var specs = {};
                    for (let index in response.result.specs) {
                        Object.assign(specs, { [index]: null });

                    }
                    this.setState({
                        showClass: true,
                        specs: specs
                    })
                }
                )
                .catch((error) => {
                    console.error(error);
                });
        } else {
            this.setState({
                showClass: true,
            })
        }
    }



    _show() {
        if (this.state.page == 1) {
            return (this._goods())
        } else if (this.state.page == 2) {
            return (this._info())
        } else {
            return (this._parameter())
        }
    }

    _list({ item }) {
        return (
            <View style={[styles.rowCenter, { borderColor: '#ccc', borderBottomWidth: 1 }]}>
                <View style={[{ flex: 0.2, padding: 10 }]}><Text>{item.title}</Text></View>
                <View style={[{ flex: 0.8, padding: 10, marginLeft: 10 }]}><Text>{item.value}</Text></View>
            </View>
        )
    }
    _parameter() {
        return (
            <FlatList
                data={this.info.params}
                renderItem={this._list}
                keyExtractor={(item, index) => index}
            />
        )
    }
    _info() {
        return (
            <View></View>
        )
    }

    _specs() {
        if (Object.keys(this.state.specsValue).length != 0) {
            let text = '已选择的分类： ';
            for (let i in this.state.specsValue) {
                text = text + '“' + this.state.specsValue[i] + '”  '
            }
            return text
        } else {
            return ('选择颜色分类')
        }

    }
    _classList({ item, index }) {
        let val = []
        for (let i in item.items) {
            val.push(
                <View key={i} style={{ width: ScreenWidth / 3, paddingLeft: 5, paddingRight: 5 }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                specs: {
                                    ...this.state.specs,
                                    [index]: item.items[i].id,
                                },
                                specsValue: {
                                    ...this.state.specsValue,
                                    [index]: item.items[i].title,
                                }
                            })
                        }}
                        style={[{ borderWidth: 1, borderColor: this.state.specs[index] == item.items[i].id ? 'red' : '#ccc', justifyContent: 'center', borderRadius: 5, paddingTop: 5, paddingBottom: 5 }]}
                    >
                        <Text numberOfLines={1} style={{ textAlign: 'center' }}>{item.items[i].title}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={[{ paddingTop: 10, paddingBottom: 10 }]}>
                <View style={[{ flex: 0.2, padding: 5 }]}><Text>{item.title}</Text></View>
                <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
                    {val}
                </View>

            </View>
        )
    }

    _goodClass() {
        if (this.state.showClass) {
            return (
                <View style={{ width: ScreenWidth, height: ScreenHeight - StatusBarHeight, position: 'absolute', }}>
                    <View style={{ flex: 0.4, backgroundColor: '#000', opacity: 0.7, }}></View>
                    <View style={{ flex: 0.6, backgroundColor: '#fff' }}>
                        <View style={{ height: 80, borderColor: '#ccc', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ marginRight: ScreenWidth / 2.6, justifyContent: 'center' }}>
                                <Text style={{ color: 'red', fontSize: 20, marginBottom: 10 }}>￥{this.picker.result.goods.marketprice}</Text>
                                <Text>请选择规格</Text></View>
                            <TouchableOpacity
                                onPress={() => { this.setState({ showClass: false }) }}
                                style={{ marginTop: 10 }}>
                                <IconEvil name={'close'} size={30} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={this.picker.result.specs}
                            extraData={this.state}
                            renderItem={this._classList.bind(this)}
                            keyExtractor={(item, index) => index}
                        />
                        <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                <Text style={{ marginLeft: 15, fontSize: 18 }}>数量</Text>
                            </View>
                            <View style={[styles.rowCenter, { flex: 1, justifyContent: 'flex-end', marginRight: 40 }]}>
                                <TouchableOpacity
                                    onPress={() => { this.state.goodsNum > 1 ? this.setState({ goodsNum: --this.state.goodsNum }) : '' }}
                                    style={styles.smallBtn}>
                                    <Icon name={'minus'} size={16} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, padding: 2, paddingLeft: 8, paddingRight: 8, borderColor: '#ccc', borderWidth: 1 }}>{this.state.goodsNum}</Text>
                                <TouchableOpacity
                                    onPress={() => { this.setState({ goodsNum: ++this.state.goodsNum }) }}
                                    style={styles.smallBtn}>
                                    <Icon name={'plus'} size={16} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ height: 60, flexDirection: 'row', }}>
                            <TouchableOpacity style={[{ flex: 1, backgroundColor: '#FE9402' }, styles.center]} >

                                <Text style={{ color: '#fff', fontSize: 16 }}>加入购物车</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ flex: 1, backgroundColor: '#FD5555' }, styles.center]} >

                                <Text style={{ color: '#fff', fontSize: 16 }}>立即购买</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                        style={{
                            width: 100, height: 100, borderColor: '#ccc', borderWidth: 1, position: 'absolute',
                            top: (ScreenHeight - StatusBarHeight) * 0.4 - 40, left: 20, backgroundColor: '#fff'
                        }}
                        source={{ uri: this.picker.result.goods.thumb }} />
                </View>
            )
        }
    }

    _goods() {
        var val = [];
        for (let index in this.info.thumbs) {
            val.push(
                <Image key={index} source={{ uri: DOMAIN + this.info.thumbs[index] }} style={{ height: 400 }} resizeMode={'cover'}></Image>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Swiper
                        height={400}
                        dotStyle={{ height: 2, }}
                        activeDotStyle={{ height: 4, }}
                        showsButtons={false}
                        autoplay={true}
                        showsVerticalScrollIndicator={true}
                    >
                        {val}
                    </Swiper>
                    <View style={{ flexDirection: 'row', alignItems: 'center',padding:10 }}>
                        <Text
                            numberOfLines={2}
                            style={{ paddingTop: 5, flex: 0.85, color: '#000', fontSize: 16, borderRightWidth: 1, borderColor: '#ccc' }}>{this.info.goods.title}
                        </Text>
                        <View style={[{ flex: 0.15, }, styles.center]}>
                            <Icon name={'share-alt'} size={20} color={'#ccc'} />
                            <Text>分享</Text>
                        </View>
                    </View>
                    <View style={{padding:10,borderColor: '#ccc', borderBottomWidth: 1,}}>
                    <Text style={{ fontSize: 20, color: 'red' ,}}>￥{this.info.goods.marketprice}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:5,paddingLeft:5  }}>
                        <Text style={{ flex: 0.8 }}>快递：{this.info.goods.issendfree ? '包邮' : this.info.goods.dispatchprice + '元'}</Text>
                        <Text style={{ flex: 0.2 }}>销量：{this.info.goods.sales}</Text>
                    </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            //请求数据
                            this.props.user.status == 'success' ? this.getGoodsPicker() : ToastAndroid.show('请先登录', ToastAndroid.SHORT);

                        }}
                    >
                        <View style={{ marginBottom: 10, marginTop: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ flex: 0.8, fontSize: 16 }}>{this._specs()}</Text>
                            <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-end', }}>
                                <Icon name={'chevron-right'} size={20} color={'#ccc'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ borderColor: '#ccc', borderTopWidth: 1, borderBottomWidth: 1 }}>
                        <View style={[{ marginTop: 50 }, styles.rowCenter]}>
                            <View style={[{ flex: 1, borderColor: '#ccc', borderRightWidth: 1 }, styles.center]}>
                                <Text style={{ fontSize: 16 }}>9</Text><Text style={{ fontSize: 16 }}>全部</Text>
                            </View>
                            <View style={[{ flex: 1, borderColor: '#ccc', borderRightWidth: 1 }, styles.center]}>
                                <Text style={{ fontSize: 16 }}>3</Text><Text style={{ fontSize: 16 }}>新品</Text>
                            </View>
                            <View style={[{ flex: 1, }, styles.center]}>
                                <Text style={{ fontSize: 16 }}>1</Text><Text style={{ fontSize: 16 }}>促销</Text>
                            </View>
                        </View>
                        <View style={[{ marginTop: 30, marginBottom: 15 }, styles.rowCenter]}>
                            <TouchableOpacity style={[styles.btn, { marginRight: 40 }]}>
                                <Text>全部商品</Text
                                ></TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Text>进店逛逛</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.center, { height: 60 }]} onPress={() => { this.setState({ page: 2 }) }}><Text>点击查看图片详情</Text></TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //顶部导航
    top: {
        flex: 0.25,
        borderBottomWidth: 1,
        alignItems: 'center',
        padding: 5,
    },
    // 居中
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    //水平分布居中
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    //按钮
    btn: {
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    smallBtn: {
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    }
})


function mapStateToProps(state) {
    return {
        user: state.User,
    }
}

export default connect(mapStateToProps)(GoodsInfo);