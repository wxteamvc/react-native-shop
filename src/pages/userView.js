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


class User extends Component{
    constructor(...props){
        super(...props);
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