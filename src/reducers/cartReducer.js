import * as Types from '../actions/actionTypes'

const initialState = {
    cartList: {
        status: false,
        data: {},
    },
}

export default function ReducerCart(state = initialState, action) {
    switch (action.type) {
        case Types.CART_INFO:
            return Object.assign({}, state, {
                cartList: {
                    status: 'success',
                    data: action.data,
                }
            });
        default:
            return state;
    }
}