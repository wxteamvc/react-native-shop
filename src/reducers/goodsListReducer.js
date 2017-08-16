import * as Types from '../actions/actionTypes'
const initialState = {
    status: false,
    data: {},
}
export default function getGoodsListReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_GOODS:
            return Object.assign({}, state, {
                status: 'success',
                data: action.data,
            });
        default:
            return state;
    }
}