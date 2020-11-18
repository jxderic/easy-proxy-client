/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-11-17 15:02:44
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-11-18 14:43:12
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import tokenReducer from './modules/Global'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reduxThunk from 'redux-thunk'

const store = createStore(combineReducers({
  tokenReducer
}), {}, composeWithDevTools(
  applyMiddleware(reduxThunk)
))

export default store