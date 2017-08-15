
import * as Types from '../actions/actionTypes'




const initialState = {
    index: {
        status: false,
        data: {},
    },
    catList: {
        status: false,
        data: {},
    },

}
export default function reducer1(state = initialState, action) {
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