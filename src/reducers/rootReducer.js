import { combineReducers } from 'redux';
import {ReducerIndex,ReducerGoods} from './initReducer';
import ReducerCat from './catReducer'
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';
import { Coupons } from './couponsReducer';

const rootReducer = combineReducers({
  GoodsList,
  History,
  ReducerIndex,
  ReducerGoods,
  ReducerCat,
  Coupons
})

export default rootReducer;