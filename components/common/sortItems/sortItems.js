import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './sortItems.css'
import SortItem from '../sortItem/sortItem'


class SortItems extends Component {

  constructor(props){
    super(props)
    const { sortList = {} } = this.props
    let sortName = sortList.length && sortList[0] && sortList[0].name
    this.state={
      sortName
    }
    
  }
  
  getSortValue =( data) =>{
    console.log(data,'i')
    let sortName = data && data.name
    this.setState({
      sortName

    })
    this.props.getSortType && this.props.getSortType(data)
  }
  sortItems = () =>{
    const { sortList = [] } = this.props
    const { sortName } = this.state
    let sortItems = sortList.map((v,i) =>{
      let res = ''
      let sortItemProps ={
        ...v,
        getSortValue:this.getSortValue,
        sortName
      }
      
      res = <SortItem {...sortItemProps}  key={'sortItem' + i}/>

      
      return res
    })
    return sortItems

  }

  
  

  render () {
    const { title } = this.props
    
    return (
      <div className='selectRegion'>
        {this.sortItems()}
      </div>
    )
  }
}

export default connect()(SortItems)