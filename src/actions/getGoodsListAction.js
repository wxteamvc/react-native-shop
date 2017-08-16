import * as Types from "./actionTypes";
export function getGoodsList(params) {
    alert(params);
    var url= 'http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods.get_list&mid=0&keywords=&isrecommand=&ishot=&isnew=&isdiscount=&issendfree=&istime=&cate=1187&order=&by=&merchid=&page=1';
    return (
        dispatch => {
            dispatch(goods(Types.GET_GOODS))
            fetch(url)
            .then(response => response.json())
            .then(
                responseJson => {
                    dispatch(goods(Types.GET_GOODS, responseJson))
                }
            ).catch((error) => {
                console.error(error);
            });
        }
    )
}

function goods(type, data = {}) {
    alert(1)
    return {
        type: type,
        data: data
    }
}


