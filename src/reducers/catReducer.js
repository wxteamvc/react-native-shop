import * as Types from '../actions/actionTypes'


const initialState = {
    catList: {
        status: false,
        data: {},
    },

}


export default function ReducerCat(state = initialState, action) {
    switch (action.type) {
        case Types.INIT_CAT_DOING:
            return Object.assign({}, state, {
                catList: {
                    status: 'doing'
                },
            });
        case Types.INIT_CAT_DONE:
            return Object.assign({}, state, {
                catList: {
                    status: 'success',
                    data: action.data,
                }
            });
        default:
            return state;
    }
}