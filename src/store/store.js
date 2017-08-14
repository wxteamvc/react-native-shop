import { createStore, applyMiddleware } from 'redux'
import renders from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(renders);

export default store;