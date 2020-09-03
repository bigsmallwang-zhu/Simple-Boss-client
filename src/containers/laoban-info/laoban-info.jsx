import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button,
  List
} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from '../../redux/actions'

class LaobanInfo extends Component {

  state = {
    header: '',  //头像
    post: '',   //职位
    info: '',  //个人简介
    company: '',  //公司名称
    salary: ''  //工资
  }

  setHeader  = (header) => {
    this.setState({header})
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    this.props.updateUser(this.state)
    console.log(this.state);
  }

  render() {
    const {header, type} = this.props.user
    if(header){
      const path = type === 'dashen' ? '/dashen' : '/laoban'
      return <Redirect to={path} />
    }
    return ( 
      <div>
        <NavBar leftContent="Skip">老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <List>
          <InputItem placeholder="招聘职位" onChange={value => this.handleChange('post', value)}>招聘职位:</InputItem>
          <InputItem placeholder="公司名称" onChange={value => this.handleChange('company', value)}>公司名称:</InputItem>
          <InputItem placeholder="职位薪资" onChange={value => this.handleChange('salary', value)}>职位薪资:</InputItem>
          <TextareaItem title="职位要求:" rows={3} placeholder="最多输入3行" onChange={value => this.handleChange('info', value)} />
          <Button type="primary" onClick={this.handleClick}>保存</Button>
        </List>
      </div> 
    );
  }
}
 
export default connect(
  state => ({user: state.user}),
  {updateUser}
)(LaobanInfo)