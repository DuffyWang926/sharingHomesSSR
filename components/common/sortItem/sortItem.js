import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './sortItem.css'

class SortItem extends Component {

  constructor(props){
    super(props)
    const { sortType } = this.props
    this.state={
      sortType
    }
    
  }
  
  onSortClick = (e) =>{
    const { name, sortName} = this.props
    let { sortType } = this.state
    
    if(sortName === name){
      sortType = !sortType
      this.setState({
        sortType
      })
    }
    this.props.getSortValue && this.props.getSortValue({ name, sortType})
    
  }
  sortType = () =>{
    const { title, sortName, name} = this.props
    const { sortType } = this.state
    let sortUp = ''
    let sortDown = ''
    let selectItem = ''
    if(sortName === name){
      selectItem = 'selectItem'
      if( sortType ){
        sortUp = 'checked'
        sortDown = 'unSelected'
      }else{
        sortUp = 'unSelected'
        sortDown = 'checked'
      }
    }else{
      selectItem = 'unSelected'
      sortUp = 'unSelected'
      sortDown = 'unSelected'
    }
    
    let sortTypeNode = 
      <div 
        className='sortItem' 
        onClick={ e => { e.persist()
            this.onSortClick(e)}}>
        <div className={selectItem}>
          {title}
        </div>
        <div className='sortType'>
          <div className={sortUp}>
            ↿
          </div>
          <div className={sortDown}>
            ⇂
          </div>
        </div>
      </div>

      
    return sortTypeNode

  }
  

  render () {
    const { title='价格' , getSortValue} = this.props
    
    return (
      <div>
        
        {this.sortType()}
      </div>
    )
  }
}

export default SortItem