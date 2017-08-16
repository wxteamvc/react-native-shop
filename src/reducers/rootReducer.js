import { combineReducers } from 'redux';
import Init from './initReducer';
import getGoodsList from './getGoodsListReducer';

const rootReducer = combineReducers({
  Init,
  getGoodsList
})

export default rootReducer;