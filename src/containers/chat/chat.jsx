import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar, List, InputItem, Grid, Icon} from 'antd-mobile'
// import QueueAnim from 'rc-queue-anim'

class Chat extends Component {
  render() { 
    return (
      <div id='chat-page'>
        <NavBar
          icon={<Icon type='left'/>}
          className='sticky-header'
          onLeftClick={()=> this.props.history.goBack()}
        >
        </NavBar>
        <List style={{marginTop:50, marginBottom: 50}}>
          {/*alpha left right top bottom scale scaleBig scaleX scaleY*/}

        </List>

        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            // value={this.state.content}
            // onChange={val => this.setState({content: val})}
            onFocus={() => this.setState({isShow: false})}
            extra={
              <span>
                {/* <span onClick={this.toggleShow} style={{marginRight:5}}>😊</span> */}
                <span onClick={this.handleSend}>发送</span>
              </span>
            }
          />
          {/* {this.state.isShow ? (
            <Grid
              data={this.emojis}
              columnNum={8}
              carouselMaxRow={4}
              isCarousel={true}
              onClick={(item) => {
                this.setState({content: this.state.content + item.text})
              }}
            />
          ) : null} */}

        </div>
      </div>
    );
  }
}
 
export default connect(
  state => ({}),
  {}
)(Chat);