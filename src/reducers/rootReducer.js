import { combineReducers } from 'redux';
import {ReducerIndex,ReducerGoods} from './initReducer';
import ReducerCat from './catReducer'
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';
<<<<<<< HEAD
import { Coupons } from './couponsReducer';
=======
import  User  from './userReducer';
>>>>>>> e94b7ef2cb84ca5fe53d0b19af237b6e5bfa9074

const rootReducer = combineReducers({
  GoodsList,
  History,
  ReducerIndex,
  ReducerGoods,
  ReducerCat,
<<<<<<< HEAD
  Coupons
=======
  User
>>>>>>> e94b7ef2cb84ca5fe53d0b19af237b6e5bfa9074
})

export default rootReducer;