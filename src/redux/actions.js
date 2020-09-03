/*
  包含n个action creator
  异步action
  同步action
 */
import {
  AUTH_SUCCESS,
  ERR_MSG,
  REV_USER,
  RESET_USER,
  REV_USER_LIST
} from './action-types'

import {
  reqLogin,
  reqRegister,
  reqUpdateUser,
  reqUser,
  reqUserList
} from '../api'

const authSuccess = user => ({type: AUTH_SUCCESS, data: user})
const errMsg = msg => ({type: ERR_MSG, data: msg})
const revUser = user => ({type: REV_USER, data: user})
export const resetUser = msg => ({type: RESET_USER, data: msg})
export const revUserList = userList => ({type: REV_USER_LIST, data: userList})


export const register = user => {
  const {username, password, password2, type} = user
  if(!username){
    return errMsg('用户名不能为空')
  } else if (!password || !password2){
    return errMsg('密码不能为空')
  } else if(password !== password2){
    return errMsg('两次输入的密码不一致')    //前台验证
  } else if(!type){
    return errMsg('请勾选身份')    //前台验证
  } else {
    //表单数据合法
    return async dipatch => {
      const respone = await reqRegister({username, password, type})
      const result = respone.data
      if(result.code === 0){
        dipatch(authSuccess(result.data))
      } else {
        dipatch(errMsg(result.msg))
      }
    }
  }
}

export const login = (user) => {
  const {username, password} = user
  if(!username){
    return errMsg('用户名不能为空')
  } else if(!password){
    return errMsg('密码不能为空')    //前台验证
  }
  return async dipatch => {
    const respone = await reqLogin(user)
    const result = respone.data
    if(result.code === 0){
      dipatch(authSuccess(result.data))
    } else {
      dipatch(errMsg(result.msg))
    }
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    const respone = await reqUpdateUser(user)
    const result = respone.data
    if(result.code === 0){
      dispatch(revUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

export const getUser = () => {
  return async dispatch => {
    const respone = await reqUser();
    const result = respone.data
    if(result.code === 0){
      dispatch(revUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

export const getUserList = (type) => {
  return async dispatch => {
    const respone = await reqUserList(type)
    const result = respone.data
    if(result.code === 0){
      dispatch(revUserList(result.data))
    }
  }
}