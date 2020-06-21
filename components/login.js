import React, {Component} from 'react';
import {connect } from 'react-redux';
import {headerList} from '../constants/HeaderCon'
import {indexList} from '../constants/Index'
import { Modal , Input} from 'antd'
import { clearTag } from '../helpers/help'
import { login } from '../actions/header'

// const namespace = 'header'

// const mapStateToProps = (state) => {
//   return{
//     ...state[namespace]
//   }
// };


class LogIn extends Component {
  constructor(props){
    super(props)
    
    this.state={
      userName:'',
      userPassword:'',
    }
  }

  onNameChange = (e) =>{
    console.log(e)
    let value = clearTag(e.target.value); 
    this.setState({
      userName:value
    })
  }

  onPasswordChange = (e) =>{
    let value = clearTag(e.target.value); 
    this.setState({
      userPassword:value
    })
  }

  onLogIn =() =>{
    const { userName , userPassword } = this.state
    this.props.dispatch(login({
      userName,
      userPassword
    }))
    this.props.updateVisible(false)
  }
  onCancel = () =>{
    this.props.updateVisible(false)
  }

  
  render(){
    return (
      <div className="logIn">
        <Modal
          title={headerList.LOGIN}
          visible={this.props.visible}
          okText={headerList.LOGIN}
          cancelText={indexList.CANCEL}
          onOk={this.onLogIn}
          onCancel={this.onCancel}
        >
          <div className="name" >
            <span className="inputTitle">
              {headerList.NAME}
            </span>
            <Input onChange={this.onNameChange}/>
          </div>
          <div className="password" >
            <span className="inputTitle">
              {headerList.PASSWORD}
            </span>
            <Input type='password' onChange={this.onPasswordChange}/>
          </div>
        </Modal>
      </div>
    )
    
  }
    
}

export default connect()(LogIn);