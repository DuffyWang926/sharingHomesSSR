import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './selectRegion.css'

class SelectRegion extends Component {

  constructor(props){
    super(props)
    const { btnList = [] } = this.props
    let btnValue= []
    if(btnList.length){
      btnValue.push(btnList[0]) 
    }
    this.state={
      btnValue
    }
    
  }
  
  onBtnClick = (e) =>{
    const {  isMutiple , name} = this.props
    let { btnValue } = this.state
    let value = e.target.id;
    if(isMutiple && !btnValue.includes(value)){
      btnValue.push(value)
    }else{
      btnValue[0] = value
    }
    
    this.setState({
      btnValue
    })
    this.props.getBtnValue && this.props.getBtnValue({ name, btnValue})
    
  }
  btns = () =>{
    const { btnList = [] } = this.props
    const { btnValue } = this.state
    let btns = btnList.map((v,i) =>{
      let res 
      let isSame = false
      btnValue.map((val,key) =>{
        if(v === val){
          isSame = true
        }
      })
      if(isSame){
        res = <Button key={'btn'+i} className='btnFocus' id={v} >{v}</Button>
      }else{
        res = <Button key={'btn'+i} id={v} >{v}</Button>
      }
      
      return res
    })
    return btns

  }
  

  render () {
    const { title } = this.props
    const { btnList = [] } = this.props
    const { btnValue } = this.state
    return (
      <div className='selectRegion'>
        <div className='title'>
          {title}:
        </div>
        <div
         className='btns'
         onClick={ e => { e.persist()
                          this.onBtnClick(e)}}>
        
          {this.btns()}
        </div>
        
      </div>
    )
  }
}

export default connect()(SelectRegion)