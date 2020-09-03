import React, { Component } from 'react'
import {
  List,
  Grid
} from 'antd-mobile'
import PropTypes from 'prop-types'

class HeaderSelector extends Component {

  state = {
    icon: ''
  }

  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  data = Array.from(new Array(20)).map((_val, i) => ({
    text: `头像${i+1}`,
    icon: require(`../../assets/images/头像${i+1}.png`)
  }));

  handleClick = ({text, icon}) => {
    this.setState({icon})
    this.props.setHeader(text)
    console.log(text);
  }

  render() {
    const {icon} = this.state
    const ListHeader = !icon ? '请选择头像' : (
      <div>
        <span>已选择头像: <img src={icon} alt='icon' /></span>
      </div>
    )
    return (
       <div>
          <List renderHeader={() => ListHeader} renderFooter={() => '请完善以下信息'}>
            <Grid data={this.data} columnNum={5} onClick={this.handleClick} />
          </List>
      </div>
    );
  }
}
 
export default HeaderSelector;