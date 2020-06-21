import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash';
import './itemList.css'
import Item from '../formItem/item'

class ItemList extends Component {

  constructor(props){
    super(props)
    
  }
  

  itemList = () =>{
    let {  itemList = []} = this.props
    
    let itemListNode = itemList.map((v,i) =>{
      let res = {}
      let itemProps ={
        ...v,
        onDataChange:this.props.onDataChange
      }
      res = <Item {...itemProps} key={'itemList' + i}/>

      return res

    })
    

    return itemListNode
  }

  
  

  render () {
   
    return (
      <div className='itemList'>
        {this.itemList()}
      </div>
    )
  }
}

export default connect()(ItemList)