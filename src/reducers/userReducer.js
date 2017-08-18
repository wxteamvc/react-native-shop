import * as Types from '../actions/actionTypes';
import { ToastAndroid } from 'react-native';
const initialState = {
    status: false,
    token:null,
    userInfo: {},
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            if(action.data.status==1){
                return Object.assign({}, state, {
                    status: 'success',
                    token: action.data.token,
                    userInfo: {}
                });
            }else if(action.data.status==0){
                ToastAndroid.show(action.data.result.message, ToastAndroid.SHORT);
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    userInfo: {}
                });
            }else{
                ToastAndroid.show('正在加载！', ToastAndroid.SHORT);
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    userInfo: {}
                });
            }
        case Types.USER_CENTER:
            if(action.data.code==1){
                return Object.assign({}, state, {
                    status: 'success',
                    token: action.data.token,
                    userInfo: action.data.data.member
                });
            }else if(action.data.code==0){
                ToastAndroid.show(action.data.result.message, ToastAndroid.SHORT);
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    userInfo: {}
                });
            }else{
                ToastAndroid.show('正在加载！', ToastAndroid.SHORT);
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    userInfo: {}
                });
            }
        case Types.LOGIN_OUT:
            return Object.assign({}, state, {
                status: false,
                token: null,
                userInfo: {}
            });
        default:
            return state;
    }
}