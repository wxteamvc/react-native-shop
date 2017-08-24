import * as Types from "./actionTypes";
import { GOODSINFO, GOODSPICKER } from "../common/global";
export  function goodsinfo(id) {
    return (
        dispatch => {
            dispatch(goodsPicker(Types.GET_GOODSINFO_DOING))
            fetch(GOODSINFO + '&id='+id)
                .then(response => response.json())
                .then(
                response => {
                    //请求成功
                    dispatch(goodsPicker(Types.GET_GOODSINFO_DONE,response))  
                }
                )
                .catch((error) =>{ 
                    console.error(error);
                });
        }
    )
}

export function replyStatus(){
      return(
        {
            type:'replyStatus'
        }
      )
}


function goodsPicker(type,data = {}) {
    return {
        type: type,
        data: data,
    }
}
