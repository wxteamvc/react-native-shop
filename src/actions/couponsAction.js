import * as Types from "./actionTypes";
import { COUPONS_URL } from "../common/global";
export function getCoupons(token) {
    return (
        dispatch => {
            dispatch(init(Types.GET_COUPONS_DOING))
            fetch(COUPONS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: token
            })
                .then(response => response.json())
                .then(
                responseJson => {
                    dispatch(init(Types.GET_COUPONS_DONE, responseJson))
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