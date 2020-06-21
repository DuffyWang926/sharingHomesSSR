import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'antd'
import { changeTab } from '../actions/header'
import LogIn from './login'
import _ from 'lodash';
import InputShow from './common/inputShow/inputShow'
import { searchRooms } from '../actions/searchRooms'

const namespace = 'header'
const mapStateToProps = (state) => {
  return{
    ...state[namespace]
  }
};

class SearchProducts extends Component {

  constructor(){
    super()
    this.state={
      logInVisible:false
    }
  }
  
  getSearchData = (data) =>{
    console.log(data)
    this.props.dispatch(searchRooms({
      query:'阳光100'
    }))


  }
  

  render () {
    let inputStyle ={
      display:"block",
      margin:"auto",
      width:"400px",
      height:"20px",
      borderRadius:"10px"
    }
    let inputShowProps={
      placeholder:'请输入',
      data:[],
      getData:this.getSearchData

    }
   
    return (
      <div>
        <div className='search'>
          {/* <Input className='searchInput' style={inputStyle}/> */}
          <InputShow { ...inputShowProps}/>
        </div>
        
        <style jsx>{`
        .search{
          padding:20px;
        }
        .search .searchInput{
          display:block;
          margin:auto;
          width:400px;
          height:20px;
          border:1px solid #eee;
          border-radius:10px;
        }
          
        `}</style>
      </div>
    )
  }
}

export default connect( mapStateToProps )(SearchProducts)