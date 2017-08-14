const initialState = {
    status:false,
}


export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case 'show':
        return Object.assign({}, state, {
            status: true
        });
    default:
        return state;
  }
}