import * as Types from '../actions/actionTypes';
import { ToastAndroid } from 'react-native';
const initialState = {
    status: false,
    token:null,
    userInfo: {},
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case Types.Login:
            if(action.data.status==1){
                return Object.assign({}, state, {
                    status: 'success',
                    token: action.data.token,
                    userInfo: {
                        mobile:action.data.mobile,
                        pwd:action.data.pwd
                    }
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
        default:
            return state;
    }
}