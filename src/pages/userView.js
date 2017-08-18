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
import { userCenter,loginOut } from '../actions/userAction';

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
                    <Text>用户中心</Text>
                    <TouchableOpacity onPress={()=>this.props.dispatch(loginOut())}>
                        <Text>退出登陆</Text>
                    </TouchableOpacity>
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
        data: state.User,
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(User);