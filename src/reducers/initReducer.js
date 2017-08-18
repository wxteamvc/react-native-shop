
import * as Types from '../actions/actionTypes'

const initialState = {
    index: {
        status: false,
        data: {},
    },
}
const initialGoodsState = {
    goods: {
        hasGoods: false,
        newGoods: {},
    }
}


export function ReducerIndex(state = initialState, action) {
    switch (action.type) {
        case Types.INIT_DOING:
            return Object.assign({}, state, {
                index: {
                    status: 'doing',
                },
            });
        case Types.INIT_DONE:
            return Object.assign({}, state, {
                index: {
                    status: 'success',
                    data: action.data,
                },
            });
        default:
            return state;
    }
}


export function ReducerGoods(state = initialGoodsState, action) {
    switch (action.type) {
        case Types.INIT_GOODS_DOING:
        return Object.assign({}, state, {
            goods: {
                hasGoods: 'doing',
            },
        });
        case Types.INIT_GOODS_DONE:
            return Object.assign({}, state, {
                goods: {
                    hasGoods: 'success',
                    newGoods: action.data,
                },
            });
        default:
            return state;
    }
}