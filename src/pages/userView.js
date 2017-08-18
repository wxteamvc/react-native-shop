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
    // componentDidUpdate(nextProps){
    //     let { data } = this.props;
    //      //请求登陆检查用户和密码是否更改
    //      alert(data.token);
    //     // if(data.status === "success"){
    //     //     this.props.dispatch(userCenter(data.token))
    //     // }
       
    // }

    render(){
        //alert(this.props.data.status);
        // if (this.props.data.status === "success"){
        //     alert(this.props.data.token)
        // }
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
        data: state.User
    }
}

export default connect(mapStateToProps)(User);