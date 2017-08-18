import * as Types from "./actionTypes";
import { Login_URL } from "../common/global";
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
                    dispatch(loginCallBack(Types.Login, Object.assign(responseJson,data)))
                }
            ).catch((error) => {
                console.error(error);
            });
        }
    )
}

function loginCallBack(type, data = {}) {
    console.log(data)
    return {
        type: type,
        data: data
    }
}