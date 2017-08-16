import { combineReducers } from 'redux';
import Init from './initReducer';
import getGoodsList from './getGoodsListReducer';
import { History } from './historyReducer';

const rootReducer = combineReducers({
  Init,
  getGoodsList,
  History
})

export default rootReducer;