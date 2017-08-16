import * as Types from "./actionTypes";
import { search_url } from "../common/global";
export function search(newdata={}){ 
    return (
        dispatch => {
            let url = search_url(newdata);
            fetch(url)
            .then(response => response.json())
            .then(
                responseJson => {
                    dispatch(goodsList(Types.GET_GOODS, responseJson))
                }
            ).catch((error) => {
                console.error(error);
            });
        }
    )
}

function goodsList(type, data = {}) {
    return {
        type: type,
        data: data
    }
}


