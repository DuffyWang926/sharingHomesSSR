import React, {Component} from 'react'
import {connect} from 'react-redux'

import { changeTab,testNode } from '../actions/header'
import LogIn from './login'
import _ from 'lodash';
import ImgDetail from './common/imgDetail/imgDetail'
import TxtDetail from './common/txtDetail/txtDetail'
import MapDetail from './common/mapDetail/mapDetail'



const namespace = 'header'
const mapStateToProps = (state) => {
  return{
    ...state[namespace]
  }
};



 

class RoomDetail extends Component {

  constructor(){
    super()
    this.state={
      logInVisible:false
    }
  }
  
  
  updateVisible =(visible) =>{
    this.setState({
      logInVisible:visible
    })
  }

  render () {
   
    return (
      <>
        <div style={{display:'flex'}}>
          <div style={{width:'80%'}}>
            <ImgDetail/>
          </div>
          <div style={{width:'20%'}}>
            <TxtDetail />
          </div>
          
        
          
        </div>
        <div style={{ width: '100%', height: '400px', position: 'relative' }}>
          <MapDetail />
          
        </div>
      </>
    )
  }
}

export default connect( mapStateToProps )(RoomDetail)