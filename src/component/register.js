"use strict";
import React, { Component } from 'react';
import { ScreenWidth , ScreenHeight , VERIFY_CODE , REGISTER } from '../common/global';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { login } from '../actions/userAction';

export default class Login extends Component{

    constructor(...props){
        super(...props);
        this.state={
            mobile:null,
            verifycode:null,
            pwd:null,
            pwdSure:null
        }
    }

    render(){
        return (
            <ScrollView>
            <View style={{height:ScreenHeight-140}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:150,borderBottomWidth:1,borderColor:'#ccc',backgroundColor:'#14C7D9'}}>
                    <Icon name="users" size={50} color={'#fff'}/>
                    <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',paddingLeft:30,color:'#fff'}}>用户注册</Text>
                </View>
                <View style={{flex:2.5,padding:20,justifyContent:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:16}}>手机号</Text>
                        </View>
                        <View style={{flex:3}}>
                        <TextInput
                            style={{ borderRadius:10 , backgroundColor:'#fff' }}
                            onChangeText={(text) => this.setState({
                                mobile: text
                            })}
                            underlineColorAndroid="transparent"
                        />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:16}}>验证码</Text>
                        </View>
                        <View style={{flex:1.5}}>
                        <TextInput 
                            style={{ borderRadius:10 , backgroundColor:'#fff' }}
                            onChangeText={(text) => this.setState({
                                verifycode: text
                            })}
                            underlineColorAndroid="transparent"
                        />
                        </View>
                        <View style={{flex:1.5}}>
                            <TouchableOpacity onPress={()=>this._verifycode()}>
                                <Text style={{textAlign:'center',fontSize:16,backgroundColor:'#0271BC',padding:10,marginLeft:10,borderRadius:10,color:'#fff'}}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:16}}>密      码</Text>
                        </View>
                        <View style={{flex:3}}>
                        <TextInput
                            style={{ borderRadius:10 , backgroundColor:'#fff' }}
                            onChangeText={(text) => this.setState({
                                pwdSure: text
                            })}
                            underlineColorAndroid="transparent"
                        />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:16}}>确认密码</Text>
                        </View>
                        <View style={{flex:3}}>
                        <TextInput
                            style={{ borderRadius:10 , backgroundColor:'#fff' }}
                            onChangeText={(text) => this.setState({
                                pwd: text
                            })}
                            underlineColorAndroid="transparent"
                        />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <View style={{flex:1,padding:40}}>
                            <TouchableOpacity onPress={()=>this._registerNow()}>
                                <Text style={{backgroundColor:'#0271BC',fontSize:16,textAlign:'center',padding:10,color:'#fff',fontWeight:'bold',borderRadius:10}}>确定注册</Text>
                            </TouchableOpacity>
                        </View>                            
                    </View>
                </View>
            </View>
            </ScrollView>
        );
    }

    _registerNow(){
        var mobile = this.state.mobile;
        var pwd = this.state.pwd;
        var verifycode = this.state.verifycode;
        if(this.state.pwd===this.state.pwdSure){
            fetch(REGISTER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'mobile=' + mobile + '&pwd=' + pwd + '&verifycode=' + verifycode
            })
                .then(response => response.json())
                .then(
                responseJson => {
                    //判断返回码
                    if(responseJson.status==1){
                        ToastAndroid.show('注册成功！', ToastAndroid.SHORT);
                    }else{
                        ToastAndroid.show('注册失败！', ToastAndroid.SHORT);
                    }
                    // console.log(responseJson)
                }
                ).catch((error) => {
                    ToastAndroid.show('注册失败！', ToastAndroid.SHORT);
                });
        }else{
            ToastAndroid.show('两次密码不一致！', ToastAndroid.SHORT);
        }
    }

    _verifycode(){
        var mobile = this.state.mobile;
        var isMobile = this._checkMobile(mobile);
        if(isMobile){
            fetch(VERIFY_CODE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'mobile=' + mobile + '&temp=sms_reg'
            })
                .then(response => response.json())
                .then(
                responseJson => {
                    ToastAndroid.show('验证码已发送！', ToastAndroid.SHORT);
                }
                ).catch((error) => {
                    ToastAndroid.show('验证码发送失败！', ToastAndroid.SHORT);
                });
            
        }else{
            ToastAndroid.show('手机号格式不正确！', ToastAndroid.SHORT);
        }
    }

     
    _checkMobile(mobile) {
    var re = /^1\d{10}$/;
        if (re.test(mobile)) {
            return true;
        } else {
            return false;
        }
    }

}