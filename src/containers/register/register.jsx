/*
  注册路由组件
*/
import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button,
  Toast
} from 'antd-mobile'
import {connect} from 'react-redux'

import Logo from '../../components/logo/logo'
import './index.less'
import {register} from '../../redux/actions'
import { Redirect } from 'react-router-dom'

const Item = List.Item

class Register extends Component {

  state = {
    username: '',
    password: '',
    password2: '',
    type: ''
  }
  regClick = () => {
    this.props.register(this.state)
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  handleSubmit = (name, value) => {
    this.setState({
      [name]: value     //[]是在this.setState当中定义变量 
    })
  }



  render() {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    if(redirectTo){
      Toast.success('注册成功', 1)
      return <Redirect to={redirectTo} />
    }

    return ( 
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            {msg ? <div className='error-msg'>{msg}</div> : null}
            <WhiteSpace />
            <InputItem onChange={val => this.handleSubmit('username', val)}>用户名:</InputItem>
            <InputItem type="password" onChange={val => this.handleSubmit('password', val)}>密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
            <InputItem type="password" onChange={val => this.handleSubmit('password2', val)}>确认密码:</InputItem>
            <Item>
              <span>用户类型：</span>
              <Radio checked={type === 'dashen'} onChange={val => this.handleSubmit('type', 'dashen')} className="my-radio">大神</Radio>
              <Radio checked={type === 'laoban'} onChange={val => this.handleSubmit('type', 'laoban')} className="my-radio">老板</Radio>
            </Item>
            <WhiteSpace />
            <Button type="primary" onClick={this.regClick}>注&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已有帐户</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}
 
export default connect(
  state => ({user: state.user}),
  {register}
)(Register);