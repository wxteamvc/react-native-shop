import * as Types from "./actionTypes";
import { Login_URL,USER_CENTER } from "../common/global";
import { ToastAndroid } from 'react-native';
export function login(data){
    return (
        dispatch => {
            fetch(Login_URL,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'mobile='+data.mobile+'&pwd='+data.pwd
              })
            .then(response => response.json())
            .then(
                responseJson => {
                    dispatch(loginCallBack(Types.LOGIN, responseJson))
                }
            ).catch((error) => {
                ToastAndroid.show('网络连接失败！', ToastAndroid.SHORT);
            });
        }
    )
}

export function userCenter(token){
    return (
        dispatch => {
            // dispatch(userCenterCallBAck(Types.USER_CENTER_DOING))
            fetch(USER_CENTER,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: '__ewei_shopv2_member_session_1='+token.__ewei_shopv2_member_session_1
              })
            .then(response => response.json())
            .then(
                responseJson => {
                    dispatch(userCenterCallBAck(Types.USER_CENTER, responseJson))
                }
            ).catch((error) => {
                ToastAndroid.show('网络连接失败！', ToastAndroid.SHORT);
            });
        }
    )
}

export function loginOut() {
    return {
        type: Types.LOGIN_OUT,
    }
}

function loginCallBack(type, data = {}) {
    return {
        type: type,
        data: data
    }
}

function userCenterCallBAck(type, data = {}){
    return {
        type: type,
        data: data
    }
}