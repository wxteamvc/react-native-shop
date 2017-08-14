
import * as Types from '../actions/actionTypes'




const initialState = {
    status:false,
    data:{},


}


export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case Types.INIT_DOING:
        return Object.assign({}, state, {
            status: 'doing'
        });
     case Types.INIT_DONE:
        return Object.assign({}, state, {
            status: 'success',
            data:action.data,
        });   
    default:
        return state;
  }
}