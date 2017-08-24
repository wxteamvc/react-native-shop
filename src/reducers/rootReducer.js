import { combineReducers } from 'redux';
import {ReducerIndex,ReducerGoods} from './initReducer';
import ReducerCat from './catReducer'
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';
import { Coupons } from './couponsReducer';
import  { loginReducer,userInfo }  from './userReducer';
<<<<<<< HEAD
import GoodsInfo from './goodsInfoRreucer';
=======
import CartReducer from './cartReducer'
>>>>>>> 025bf4a489491036f7d590e4d3504fd34da7bf12

const rootReducer = combineReducers({
  GoodsList,
  History,
  ReducerIndex,
  ReducerGoods,
  ReducerCat,
  Coupons,
  User:loginReducer,
  userInfo,
<<<<<<< HEAD
  GoodsInfo
=======
  CartReducer
>>>>>>> 025bf4a489491036f7d590e4d3504fd34da7bf12
})

export default rootReducer;