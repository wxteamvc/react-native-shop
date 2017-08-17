import * as Types from "./actionTypes";
import { SERVER_URL, PRODUCT_URL,search_url } from '../common/global'

export function getCatInfo() {
    return (
        dispatch => {
            dispatch(init(Types.INIT_CAT_DOING))
            fetch(PRODUCT_URL)
                .then(response => response.json())
                .then(
                responseJson => {
                    dispatch(init(Types.INIT_CAT_DONE, responseJson))
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