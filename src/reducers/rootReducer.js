import { combineReducers } from 'redux';
import Init from './initReducer';
import GoodsList from './goodsListReducer';

const rootReducer = combineReducers({
  Init,
  GoodsList
})

export default rootReducer;