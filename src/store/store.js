import { createStore } from 'redux'
import todoApp from '../reducers/rootReducer'
let store = createStore(todoApp)