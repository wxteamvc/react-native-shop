import { combineReducers } from 'redux';
import Init from './initReducer';
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';

const rootReducer = combineReducers({
  Init,
  GoodsLis  History})

export default rootReducer;