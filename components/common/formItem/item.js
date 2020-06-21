import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button, Select } from 'antd'
import _ from 'lodash';
import './item.css'

const { Option } = Select;
class Item extends Component {

  constructor(props){
    super(props)
    
  }
  
  

  

  onDataChange = (e) =>{
    let { name} = this.props

    let data = {}
    if(e.target){
      let value = e.target.value
      let name = e.target.name
      data[name] = value
    }else{
      data[name] = e
    }
    this.props.onDataChange && this.props.onDataChange(data)
  }

  item = () =>{
    let { type, title, middle, end , dataList = [], placeholder , name} = this.props
    
    if(type === 'input'){
      middle = <Input placeholder={placeholder} name={name} onChange={ e => { e.persist(); this.onDataChange(e)}}/>
    }else if(type === 'inputList'){
      middle = dataList.map((v,i) =>{
        let res = {}
        res = <Input name={v.name} placeholder={v.placeholder} onChange={ e => { e.persist(); this.onDataChange(e)}}/>
        return res
      })
    }else if(type === 'select'){
      let defaultValue = dataList.length && dataList[0] && dataList[0].id
      let tempList = dataList.map((v,i) =>{
        let res = {}
        res = <Option value={v.id} key={'option' + i}>{v.value}</Option>
        return res
      })
      middle = <Select  defaultValue={defaultValue} style={{width:'100px'}} onChange={ e => { this.onDataChange(e)}}>
        {tempList}
      </Select>
    }else if(type === 'txt'){
      
    }
    let res = 
    <div className='item'>
      <div className='itemTitle'>
        {title}
      </div>
      <div className='itemMiddle'>
          {middle}
      </div>
      <div className='itemEnd'>
          {end}
      </div>

    </div>

    return res
  }

  
  

  render () {
   
    return (
      <div >
        {this.item()}
      </div>
    )
  }
}

export default connect()(Item)