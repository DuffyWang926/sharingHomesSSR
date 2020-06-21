import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './SelectItems.css'
import SelectRegion from '../selectRegion/selectRegion'
class SelectItems extends Component {

  constructor(props){
    super(props)
    
  }
  
  
  items = () =>{
    const { ItemsList = [] } = this.props
    let items = ItemsList.map((v,i) =>{
      let res = <SelectRegion {...v} key={'items' + i}/>
      return res
    })
    return items

  }
  

  render () {
    const { title } = this.props
    
    return (
      <div className='selectItems'>
        {this.items()}
      </div>
    )
  }
}

export default connect()(SelectItems)