import * as Types from '../actions/actionTypes'
const initialState = {
    status: false,
    data:{},
}

export default function GoodsInfo(state = initialState, action) {
    switch (action.type) {
        case Types.GET_GOODSINFO_DOING:
            return Object.assign({}, state, {
                    status: 'doing'
            });
        case Types.GET_GOODSINFO_DONE:
            return Object.assign({}, state, {
                    status: 'success',
                    data:action.data
            });
         case 'replyStatus':
           return   Object.assign({}, state, {
            status: false,
           
    });
        default:
            return state;
    }
}