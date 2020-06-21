import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'antd'
import _ from 'lodash';
import './input.css'

class InputShow extends Component {

  constructor(){
    super()
    this.state={
      isListShow:false
    }
  }
  
  onInputChange = (e) =>{
    console.log('onInputChange')
    let value = e.target.value;
    if(value){
      this.props.getData(value)
      this.setState({
        isListShow:true
      })
    }else{
      this.setState({
        isListShow:false
      })
    }
  }
  

  render () {
    const { placeholder, data } = this.props;
    const { isListShow } = this.state;

    let classCurrent = 'searchList'
    if(isListShow){
      classCurrent += ' showList'
    }
   
    return (
      <div>
        <div className='search'>
          <Input
            className='searchInput'
            placeholder={placeholder}
            onChange={this.onInputChange}
          />
          <div className={classCurrent}>
            {data}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(InputShow)