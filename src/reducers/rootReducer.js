import { combineReducers } from 'redux';
import {ReducerIndex,ReducerGoods} from './initReducer';
import ReducerCat from './catReducer'
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';
import { Coupons } from './couponsReducer';
import  { loginReducer,userInfo }  from './userReducer';
import GoodsInfo from './goodsInfoRreucer';

const rootReducer = combineReducers({
  GoodsList,
  History,
  ReducerIndex,
  ReducerGoods,
  ReducerCat,
  Coupons,
  User:loginReducer,
  userInfo,
  GoodsInfo
})

export default rootReducer;