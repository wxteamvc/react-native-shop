import * as Types from '../actions/actionTypes';
const initialState = {
    status:false,
    data:{},
}
export function Coupons(state = initialState, action) {
    switch (action.type) {
        case Types.GET_COUPONS_DOING:
        return Object.assign({}, state, {
            status:'doing'     
        });
        case Types.GET_COUPONS_DONE:
            return Object.assign({}, state, {
                status:'success',
                data: action.data
            });
        default:
            return state
    }
}