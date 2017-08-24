"use strict";


import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Login from '../component/login';
import { connect } from 'react-redux';
import { userCenter,loginOut } from '../actions/userAction';
import Icon from 'react-native-vector-icons/FontAwesome';
class User extends Component{
    
    constructor(...props){
        super(...props);
    }

    componentDidUpdate(nextProps){
        let { data,userInfo } = this.props;
         //请求用户信息
        if(data.status === "success" && userInfo.status === false){
            this.props.dispatch(userCenter(data.token))
        }
    }

    render(){
        if(this.props.data.status=='success'){
            return (
                <View>
                    {this._userCenter()}
                </View>
            );
        }else{
            return (
                <Login {...this.props} />
            )
        }
    }

    _userCenter(){
        if(this.props.userInfo.data.code!=undefined){
        var member= this.props.userInfo.data.data.member;
        return(
            <ScrollView>
                <View style={{backgroundColor:'#FE5455',height:150,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#fff',textAlign:'center',padding:5}}>余额</Text>
                        <Text style={{color:'#FEB73B',textAlign:'center',padding:5}}>{member.credit2}</Text>
                        <TouchableOpacity>
                            <Text style={{borderWidth:1,borderColor:'#fff',borderRadius:10,textAlign:'center',color:'#fff',padding:5,marginTop:5}}>充值</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:60,height:60,backgroundColor:'#999',borderRadius:60,justifyContent:'center',alignItems:'center',borderWidth:3,borderColor:'#fff'}}>{member.avatar==''?<Icon name="user-o" size={40} color={'#fff'}/>:<Image source={{uri:member.avatar}} style={{width:40,height:40}}/>}</View>
                        <Text style={{color:'#fff'}}>{member.nickname}</Text>
                        <Text style={{color:'#fff'}}>等级：[{member.level}]</Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignSelf:'flex-end',paddingRight:10,marginTop:20}}>
                            <TouchableOpacity>
                                <Icon name="gear" size={20} color={'#fff'}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:'#fff',padding:5}}>积分</Text>
                        <Text style={{color:'#FEB73B',padding:5}}>{member.credit1}</Text>    
                    </View>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <View style={{flexDirection:'row',padding:10}}> 
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Icon name="list" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                            <Text style={{marginLeft:5}}>我的订单</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                            <Text style={{marginRight:5}}>查看全部订单</Text>
                            <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderTopWidth:1,borderColor:'#ccc',flexDirection:'row'}}>
                        <View style={{flex:1,marginTop:10,marginBottom:10,justifyContent:'center',alignItems:'center',borderRightWidth:1,borderColor:'#ECECEC'}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="address-card-o" size={30} color={'#aaa'}/>
                                    <Text>待付款</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,marginTop:10,marginBottom:10,borderRightWidth:1,borderColor:'#ECECEC'}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="cube" size={30} color={'#aaa'}/>
                                    <Text>待发货</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,marginTop:10,marginBottom:10,borderRightWidth:1,borderColor:'#ECECEC'}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="truck" size={30} color={'#aaa'}/>
                                    <Text>待收货</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,marginTop:10,marginBottom:10}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Icon name="plug" size={30} color={'#aaa'}/>
                                    <Text>退换货</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Coupons')}>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ECECEC'}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="ticket" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>领取优惠券</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="address-card-o" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>我的优惠券</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cart')}>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ECECEC'}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="ticket" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>我的购物车</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ECECEC'}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="address-card-o" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>我的关注</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ECECEC'}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="address-card-o" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>我的足迹</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="address-card-o" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>消息提醒设置</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="ticket" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>充值记录</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:10,paddingBottom:10}}> 
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="ticket" size={20} color={'#aaa'} style={{marginLeft:5}}/>
                                <Text style={{marginLeft:5}}>收货地址管理</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                                <Icon name="angle-right" size={20} color={'#ccc'} style={{marginRight:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff',padding:10}}>
                    <TouchableOpacity  onPress={()=>this.props.dispatch(loginOut())}>
                        <Text style={{color:'red',textAlign:'center'}}>退出登陆</Text>
                    </TouchableOpacity>
                </View>

                <View style={{height:50}}></View>

            </ScrollView>
        )
        }
    }

}

function mapStateToProps(state) {
    return {
        data: state.User,
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(User);