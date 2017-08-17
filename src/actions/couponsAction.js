import * as Types from "./actionTypes";
import { COUPONS_URL } from "../common/global";
export function getCoupons() {
    return (
        dispatch => {
            dispatch(init(Types.GET_COUPONS_DOING))
            fetch(COUPONS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: '__ewei_shopv2_member_session_1=eyJpZCI6IjIyMTYiLCJvcGVuaWQiOiJvUmE4SndHeUx3aTJIX0RDMURYUjdfVS1NZDVzIiwibW9iaWxlIjoiMTM5MDAwMDAwMDAiLCJwd2QiOiJhY2NjZjFiMWJhZTI5NGExM2YyZDFlNjdjZGFkMGYwNSIsInNhbHQiOiJWVmFJVlYwRjRsbHVWU2NpIiwiZXdlaV9zaG9wdjJfbWVtYmVyX2hhc2giOiJiZDcyMzE2MWRmNTk5MzJiM2JjZWIwZWMwZTQwNThiNiJ9'
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