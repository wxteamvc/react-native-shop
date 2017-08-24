import * as Types from "./actionTypes";
import { CART_URL } from '../common/global';
import { ToastAndroid } from 'react-native';

export function getCartInfo(token) {
    return (
        dispatch => {
            var key, value;
            for (i in token) {
                key = i;
                value = token[key]
            }
            fetch(CART_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: key + '=' + value
            })
                .then(response => response.json())
                .then(
                responseJson => {
                    dispatch(cartInfo(Types.CART_INFO, responseJson))
                }
                ).catch((error) => {
                    ToastAndroid.show('网络连接失败！', ToastAndroid.SHORT);
                });
        }
    )
}


function cartInfo(type, data = {}) {
    return {
        type: type,
        data: data
    }
}