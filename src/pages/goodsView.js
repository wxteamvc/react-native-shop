"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {getGoodsList} from '../actions/getGoodsListAction';
import { connect } from 'react-redux';


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
        this.props.navigation.dispatch(getGoodsList(this.props.navigation.state.params.catId));
    }

    render(){
        return (
            <View>
                {this._orderBy()}
                <Text>商品列表页</Text>
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
}

function  mapStateToProps(state){
    return{
        data:state.getGoodsList
    }
}

export default  connect(mapStateToProps)(Goods);