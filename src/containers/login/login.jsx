/*
  登录路由组件
*/
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {
  NavBar,
  WingBlank,
  WhiteSpace,
  InputItem,
  Button,
  List
} from 'antd-mobile'

import Logo from '../../components/logo/logo'
import '../../assets/css/index.less'
import {login} from '../../redux/actions'

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  login = () => {
    this.props.login(this.state)
  }

  handleSubmit = (name, value) => {
    // console.log(name + ':' +value)
    this.setState({[name]: value})   //[] 表示变量
  }

  render() {
    const {msg, redirectTo} = this.props.user
    if(redirectTo){
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
            <InputItem onChange={value => this.handleSubmit('username',value)}>用户名:</InputItem>
            <InputItem type="password" onChange={value => this.handleSubmit('password',value)}>密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>点击注册</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}
 
export default connect(
  state => ({user: state.user}),
  {login}
)(Login);