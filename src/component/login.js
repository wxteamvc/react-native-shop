"use strict";
import React, { Component } from 'react';
import { ScreenWidth , ScreenHeight } from '../common/global';
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
            pwd:null
        }
    }

    render(){
        return (
            <ScrollView>
            <View style={{height:ScreenHeight-100}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:150,borderBottomWidth:1,borderColor:'#ccc',backgroundColor:'#FE5455'}}>
                    <Icon name="users" size={50} color={'#fff'}/>
                    <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',paddingLeft:30,color:'#fff'}}>用户登陆</Text>
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
                            <Text style={{textAlign:'center',fontSize:16}}>密      码</Text>
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
                            <TouchableOpacity onPress={()=>this._login()}>
                                <Text style={{backgroundColor:'#0271BC',fontSize:16,textAlign:'center',padding:10,color:'#fff',fontWeight:'bold',borderRadius:10}}>登陆</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,padding:40}}>
                            <TouchableOpacity onPress={()=>this._register()}>
                                <Text style={{backgroundColor:'#0271BC',fontSize:16,textAlign:'center',padding:10,color:'#fff',fontWeight:'bold',borderRadius:10}}>注册</Text>
                            </TouchableOpacity>
                        </View>                            
                    </View>
                </View>
            </View>
            </ScrollView>
        );
    }

    _login(){
        let mobile = this.state.mobile;
        let pwd = this.state.pwd; 
        if(mobile&&pwd){
            this.props.dispatch(login({mobile:this.state.mobile,pwd:this.state.pwd}))
        }else{
            ToastAndroid.show('手机号或密码输入错误！', ToastAndroid.SHORT);
        }
    }

    _register(){

    }

}