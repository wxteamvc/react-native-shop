import * as Types from '../actions/actionTypes'
const initialState = {
    goodList:{
        status: false,
        data: {},
    }
}
export default function goodsListReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_GOODS:
            return Object.assign({}, state, {
                goodList:{
                    status: 'success',
                    data: action.data,
                }
            });
        default:
            return state;
    }
}