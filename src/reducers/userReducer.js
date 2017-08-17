import * as Types from '../actions/actionTypes'
const initialState = {
    status: false,
    token:null,
    userInfo: {},
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case Types.Login:
            if(action.data.status==1){
                return Object.assign({}, state, {
                    status: 'success',
                    token: action.data.token,
                });
            }else{
                return Object.assign({}, state, {
                    status: false,
                    token: null,
                    userInfo: {}
                });
            }
        default:
            return state;
    }
}