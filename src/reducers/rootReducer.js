import { combineReducers } from 'redux';
import Init from './initReducer';
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';

const rootReducer = combineReducers({
  Init,
  GoodsList,
  History
})

export default rootReducer;