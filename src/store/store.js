import { createStore, applyMiddleware } from 'redux'
import renders from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk';

import {persistStore, autoRehydrate} from 'redux-persist';
import { AsyncStorage } from 'react-native';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(renders,autoRehydrate());

persistStore(store,{
    storage:AsyncStorage,
    blacklist:['userInfo','GoodsInfo']
});

export default store;

// export default  store = createStoreWithMiddleware(renders);