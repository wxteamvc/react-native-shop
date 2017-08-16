"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {search} from '../actions/searchAction';
import { connect } from 'react-redux';
import { ScreenWidth } from '../common/global';
import Icon from 'react-native-vector-icons/FontAwesome';


class Goods extends Component{

    constructor(...props){
        super(...props)
        this.state={
            orderBy:'default',  //默认综合排序default;另外销量：sale;价格：price;筛选：filter
            priceOrder:null //up价格升，down价格降
        }
    }

    componentDidMount(){
        // console.log(this.props)
        this.props.dispatch(search({cate:this.props.navigation.state.params.catId}));
    }

    render(){
        return (
            <View>
                {this._orderBy()}
                {this._goodsList()}
            </View>
        );
    }

    // 排序视图 
    _orderBy(){
        return(
            <View style={{flexDirection:'row',backgroundColor:'#fff',height:45,alignItems:'center',borderBottomWidth:1}}>
                <View style={{flex:1,alignItems:'center',borderRightWidth:1}}>
                    <TouchableOpacity onPress={()=>this.setState({orderBy:'default'})}>
                        <Text style={{color:this.state.orderBy=='default'?'red':null}}>综合</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center',borderRightWidth:1}}>
                    <TouchableOpacity onPress={()=>this.setState({orderBy:'sale'})}>
                        <Text style={{color:this.state.orderBy=='sale'?'red':null}}>销量</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this._priceOrder()}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{justifyContent:'center'}}>
                                <Text style={{color:this.state.orderBy=='price'?'red':null}}>价格</Text>
                            </View>
                            <View>
                                <Text style={{color:this.state.priceOrder=='up' && this.state.orderBy=='price'?'red':null}}>▲</Text>
                                <Text style={{color:this.state.priceOrder=='down' && this.state.orderBy=='price'?'red':null}}>▼</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center',borderLeftWidth:1}}>
                    <TouchableOpacity onPress={()=>this.setState({orderBy:'filter'})}>
                        <Text style={{color:this.state.orderBy=='filter'?'red':null}}>筛选</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //价格升降排序
    _priceOrder(){
        if(this.state.orderBy!='price'){
            if(this.state.priceOrder==null){
                this.setState({
                    orderBy:'price',
                    priceOrder:'up'
                })
            }else if(this.state.priceOrder=='up'){
                this.setState({
                    orderBy:'price',
                    priceOrder:'down'
                })
            }else{
                this.setState({
                    orderBy:'price',
                    priceOrder:'up'
                })
            }
        }else{
            if(this.state.priceOrder==null){
                this.setState({
                    priceOrder:'up'
                })
            }else if(this.state.priceOrder=='up'){
                this.setState({
                    priceOrder:'down'
                })
            }else{
                this.setState({
                    priceOrder:'up'
                })
            }
        }
    }

    // 商品列表视图
    _goodsList(){
        let goodsList=this.props.goodsList;
        if(goodsList.status=='success'){
            var goodsListObj=goodsList.data.result.list;
            var goodsListArr=[];
            for(let i=0;i<goodsListObj.length;i++){
                goodsListArr.push(
                    <View key={i} style={{width:ScreenWidth/2}}>
                        <View style={{marginTop:5,marginLeft:5,marginBottom:5}}><Image source={{uri:goodsListObj[i].thumb}} style={{width:ScreenWidth/2-10,height:ScreenWidth/2-5}}/></View>
                        <View style={{padding:5}}>
                            <View>
                                <Text numberOfLines={1}>{goodsListObj[i].title}</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingTop:10}}>
                                <View style={{flex:5}}>
                                    <Text style={{color:'red'}}>￥{goodsListObj[i].marketprice}</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{width:24,height:24,backgroundColor:'red',alignItems:'center',justifyContent:'center',borderRadius:10,padding:2}}>
                                        <TouchableOpacity>
                                            <Icon name="shopping-cart" size={15} color={'#fff'}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                
                            </View>

                        </View>
                    </View>
                )
            }

        }
        
        return goodsListArr;
        
    }
}

function  mapStateToProps(state){
    return{
        goodsList:state.GoodsList
    }
}

export default connect(mapStateToProps)(Goods);