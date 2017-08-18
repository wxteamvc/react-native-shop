import {
    ToastAndroid,
} from 'react-native';
import * as Types from "./actionTypes";
import { COUPONS_URL } from "../common/global";
export function getCoupons(token) {
    return (
        dispatch => {
            dispatch(init(Types.GET_COUPONS_DOING))
            var url=COUPONS_URL+Math.round(new Date().getTime()/1000)+'&app=1'
            alert(Math.round(new Date().getTime()/1000))
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: '__ewei_shopv2_member_session_1=' + token.__ewei_shopv2_member_session_1
            })
                .then(response => response.json())
                .then(
                responseJson => {
                    if (responseJson.status == 1) {
                        dispatch(init(Types.GET_COUPONS_DONE, responseJson))
                    }else{
                        ToastAndroid.show(responseJson.message, ToastAndroid.LONG);
                        dispatch(init(Types.LOGIN_OUT))
                    }
                }
                )
                .catch((error) => {
                    console.error(error);
                });
        }
    )
}


function init(type, data = {}) {
    return {
        type: type,
        data: data
    }
}