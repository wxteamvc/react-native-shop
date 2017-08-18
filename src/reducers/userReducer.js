import * as Types from '../actions/actionTypes';
import { ToastAndroid } from 'react-native';
const initialState = {
    status: false,
    token:null,
}

const userState = {
    status:false,
    data: {},
}

export function userInfo(state = userState, action){
    switch (action.type) {
        case Types.USER_CENTER:
            return Object.assign({},state,{
                status:"success",
                data:action.data,
            })
        default:
            return state;
    }
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            if(action.data.status==1){
                return Object.assign({}, state, {
                    status: 'success',
                    token: action.data.token,
                    // userInfo: {}
                });
            }else if(action.data.status==0){
                ToastAndroid.show(action.data.result.message, ToastAndroid.SHORT);
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    // userInfo: {}
                });
            }else{
                ToastAndroid.show('正在加载！', ToastAndroid.SHORT);
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    // userInfo: {}
                });
            }
        case Types.LOGIN_OUT:
            return Object.assign({}, state, {
                status: false,
                token: null,
                // userInfo: {}
            });
        default:
            return state;
    }
}