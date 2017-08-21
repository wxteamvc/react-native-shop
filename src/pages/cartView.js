"use strict";


import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Login from '../component/login';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCartInfo } from '../actions/cartAction';

class Cart extends Component{
    constructor(...props){
        super(...props)
    }

    componentDidUpdate(nextProps){
        let { data,userInfo } = this.props;
        //请求购物车
       if(data.status === "success" && userInfo.status === false){
        this.props.dispatch(getCartInfo(data.token))
       }
    }

    render(){
        if(this.props.data.status=='success'){
            return this._cart()
        }else{
            return (
                <Login {...this.props} />
            )
        }
    }

    _cart(){
        if(this.props.cartInfo.cartList.data.length>0){
            let cartList=this.props.cartInfo.cartList.data;
            let cartListArr=[];
            for(let i=0;i<cartList.length;i++){
                cartListArr.push(
                    <View key={i}>
                        <View>
                            <Icon name="circle-thin" size={25}/>
                        </View>
                        <View>
                            <Icon name="check-circle" size={25} color={'#EF4F4F'}/>
                        </View>
                        <View></View>
                        <View></View>
                    </View>
                )
            }
            return(
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    {cartListArr}
                </View>
            )
        }else{
            return(
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Icon name="shopping-cart" size={80} color={'#aaa'}/>
                    <Text style={{color:'#aaa'}}>购物车空空如也~</Text>
                    {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={{borderWidth:1,borderRadius:10,padding:10,marginTop:10}}>主人快去给我找点东西吧</Text>
                    </TouchableOpacity> */}
                </View>
            )
        }
        
    }

}

function mapStateToProps(state) {
    return {
        data: state.User,
        userInfo: state.userInfo,
        cartInfo:state.CartReducer
    }
}

export default connect(mapStateToProps)(Cart);