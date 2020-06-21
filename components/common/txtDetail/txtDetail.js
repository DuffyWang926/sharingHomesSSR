import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './txtDetail.css'
import SortItem from '../sortItem/sortItem'
import { Carousel } from 'antd';
import ItemList from '../formItemList/itemList'
class ImgDetail extends Component {

  constructor(props){
    super(props)
    this.state={
        
    }
  }

 
 
  

  render () {
    let itemListProps = [
      {
        title:'位置',
        middle:'dawanglu'

      }
    ]
    let contractList = [
      {
        title:'联系人',
        middle:'angle'

      }
    ]
    
    return (
      <div className='txtDetail' >
         <div>
           title
         </div>
         <div>
           price
         </div>
         <div>
           rentTime
         </div>
         <div>
           <div>
             area
           </div>
           <div>
             toward
           </div>
           <div>
             houseType
           </div>
         </div>
         <div>
           <ItemList  itemList={ itemListProps}/>
         </div>
         <div>
          <ItemList  itemList={ contractList}/>
         
         </div>

        
      </div>
    )
  }
}

export default connect()(ImgDetail)