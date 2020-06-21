import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './room.css'
import SortItem from '../sortItem/sortItem'

class Room extends Component {

  constructor(props){
    super(props)
    
  }
  
  

  labelList = () =>{
    const { labelList = [] } = this.props
    let labelNode = labelList.map((v,i) =>{
      let res = <div className='label' key={'label' + i}>
                  {v}
                </div>
      return res
    })
    return labelNode
  }

  onRoomClick = () =>{
    const { id } = this.props
    this.props.onRoomClick && this.props.onRoomClick(id)
  }

  
  

  render () {
    let { imgSrc, title, area, floor, floorTotal, location, price } = this.props

    
      

    let priceEnd = []
    if(Array.isArray(price)){
      priceEnd = price.map( (v,i) =>{
        let background = v.split(';')[0];
        // let backgroudImg = `'${background.split(': ')[1]}'`;
        let backgroudImg = background.split(': ')[1].trim();
        let position = v.split(';')[1];
        // let positionStyle = `'${position.split(':')[1]}'`;
        let positionStyle = position.split(':')[1].trim();
        
        let res = <span style={{backgroundImage:backgroudImg,backgroundPosition:positionStyle}}></span>
        return res

      })
    }else{
      priceEnd = price
    }
    // priceEnd = [
    //   <span style={{
    //     backgroundImage:'url(https://static8.ziroom.com/phoenix/pc/images/price/new-list/2e120609b7f35a9ebec0c72c4b7502b2.png)',
    //     backgroundPosition:'-149.8px'}}></span>,
    //     <span key = '11' style={{
    //       backgroundImage:'url(https://static8.ziroom.com/phoenix/pc/images/price/new-list/2e120609b7f35a9ebec0c72c4b7502b2.png)',
    //       backgroundPosition:'-149.8px'}}></span>
    // ]
    // console.log(priceEnd,'priceEnd')
   
    return (
      <div className='room' onClick={this.onRoomClick}>
        <div className='roomImg'>
          <img src={imgSrc} />
        </div>
        <div className='title'>
          {title}
        </div>
        <div className='content'>
          <div className='details'>
            <div className='detail'>
              <span>{area}m<sup>2</sup></span>
              ｜
              <span>{floor}/{floorTotal}层</span>
            </div>
            <div className='location'>
            {location}
            </div>
          </div>
          <div className='price'>
            ¥{priceEnd}/月
          </div>
        </div>
        <div className='labelList'>
          {this.labelList()}
        </div>
      </div>
    )
  }
}

export default connect()(Room)