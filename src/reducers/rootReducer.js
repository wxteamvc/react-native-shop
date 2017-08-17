import { combineReducers } from 'redux';
import {ReducerIndex,ReducerGoods} from './initReducer';
import ReducerCat from './catReducer'
import GoodsList from './goodsListReducer';
import { History } from './historyReducer';
import  User  from './userReducer';

const rootReducer = combineReducers({
  GoodsList,
  History,
  ReducerIndex,
  ReducerGoods,
  ReducerCat,
  User
})

export default rootReducer;