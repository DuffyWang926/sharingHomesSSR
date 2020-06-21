import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash';
import './roomList.css'
import Room from '../room/room'



class RoomList extends Component {

  constructor(props){
    super(props)
  }
  
  
  roomList = () =>{
    const { roomList = [] } = this.props
    // console.log(this.props,'roomList props')
    let roomListNode = roomList.map((v,i) =>{
      let res = ''

      let roomProps = {
        ...v,
        onRoomClick:this.props.onRoomClick
      }
      
      
      res = <div className='roomWrapper' key={'roomList' + i}>
                <Room {...roomProps} />
            </div>
      

      
      return res
    })
    return roomListNode

  }

  
  

  render () {
    const { roomList } = this.props
    
    return (
      <div className='roomList'>
            {this.roomList()}
      </div>
    )
  }
}

export default connect()(RoomList)