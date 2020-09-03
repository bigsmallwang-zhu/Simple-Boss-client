/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */

 import {combineReducers} from 'redux'
 import {
   AUTH_SUCCESS, 
   ERR_MSG, REV_USER, 
   RESET_USER,
   REV_USER_LIST
  } from './action-types'
 import {getRedirectTo} from '../utils'

 const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
 }

 const initUserInit = []

 function user(state=initUser, action){
  switch(action.type){
    case AUTH_SUCCESS:
      const {type, header} = action.data
      return {...action.data, redirectTo: getRedirectTo(type, header)}
    case ERR_MSG:
      return {...state, msg: action.data}
    case REV_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state
  }
 }

 //产生user_list状态的reducer

 function userList(state=initUserInit, action){
  switch(action.type){
    case REV_USER_LIST:
      return action.data
    default:
      return state
  }
 }



 export default combineReducers({
  user,
  userList
 })