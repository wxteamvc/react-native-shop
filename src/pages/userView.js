"use strict";


import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Login from '../component/login';
import { connect } from 'react-redux';
import { login } from '../actions/userAction';

class User extends Component{
    constructor(...props){
        super(...props);
    }

    componentDidMount(){
        //请求登陆检查用户和密码是否更改
        if(this.props.data.status=='success'){
            this.props.dispatch(login({mobile:this.props.data.userInfo.mobile,pwd:this.props.data.userInfo.pwd}))
        }
    }
   
    render(){
        if(this.props.data.status=='success'){
            return (
                <View>
                    <Text>用户中心</Text>
                </View>
            );
        }else{
            return (
                <Login dispatch={this.props.dispatch} />
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        data: state.User
    }
}

export default connect(mapStateToProps)(User);