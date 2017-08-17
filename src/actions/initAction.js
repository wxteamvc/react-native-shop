import * as Types from "./actionTypes";
import { SERVER_URL, PRODUCT_URL,search_url } from '../common/global'
export function getinfo() {
    return (
        dispatch => {
            dispatch(init(Types.INIT_DOING))
            fetch(SERVER_URL)
                .then(response => response.json())
                .then(
                responseJson => {
                    dispatch(init(Types.INIT_DONE, responseJson))
                }
                ).catch((error) => {
                    console.error(error);
                });
        }
    )
}


export function getGoods() {
    return (
        dispatch => {
            dispatch(init(Types.INIT_GOODS_DOING))
            fetch(search_url())
                .then(response => response.json())
                .then(
                responseJson => {
                    dispatch(init(Types.INIT_GOODS_DONE, responseJson))
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


