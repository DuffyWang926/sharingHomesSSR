import React, {Component} from 'react'
import {connect} from 'react-redux'

import { changeTab } from '../actions/header'
import LogIn from './login'
import _ from 'lodash';
// import  logo from '../public/images/lenovo.png'  
const namespace = 'header'
const mapStateToProps = (state) => {
  console.log(state)
  return{
    ...state[namespace]
  }
};



 

class Header extends Component {

  constructor(){
    super()
    this.state={
      logInVisible:false
    }
  }
  
  getTab = () =>{
    const { tabList, tabKey } = this.props
    let divList= []
    _.forEach(tabList,(v,i) =>{
      let classInit = { 
        width:"18%",
        // border:"1px solid #eee",
        height:"100%",
        display: "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "fontSize": "14px"
      }
      let classFocus={
        background: "green",
        "borderColor": 'green'
      }
      let classCurrent = classInit
    
      if(i === tabKey){
        classCurrent = { ...classInit, ...classFocus }
      }
      divList.push(
        <div
          style ={classCurrent}
          key={i + 'tab'}
          onClick={e => this.onTabClick(i)}>
          { _.toUpper(v)}
        </div>
      )
    })
    return divList
  }
  onTabClick = (i) => { 
    this.props.dispatch(changeTab(i))
    // this.props.logIn({name:'wefRoot',password:'123456'})
  }
  onLogIn = () =>{
    this.setState({
      logInVisible:true
    })
    
  }
  updateVisible =(visible) =>{
    this.setState({
      logInVisible:visible
    })
  }

  render () {
    const { user } = this.props
    const { name } = user
    const { logInVisible } = this.state
    return (
      <div>
       
        <div className='header'>
          <div className='headerImg'>
            <img src='/images/lenovo.png' alt="logo"/>
          </div>
          <div className='headerTabs'>
            {this.getTab()}
          </div>
          <div className='headerUser'>
            {
              name ?
              <div className='showUser'>
                {name}
              </div>
              : 
              <div>
                <div className='logIn' onClick={this.onLogIn}>
                  登录
                </div>
                <div className='register'>
                  /注册
                </div>
              </div>
            }
          </div>
          <LogIn visible={logInVisible} updateVisible={this.updateVisible}/> 
          
        </div>
        <style jsx>{`
          .header{
                width:100%;
                height: 60px;
                font-size: $baseSize;
                padding:0 5px 0 0;
                box-sizing: border-box;
          }
          .headerTabs{
              width:75%;
              height: 100%;
              float: left;
              display: flex;
              align-items: center;
              
          }
          .headerTabs .headerTab{
              width:18%;
              border:1px solid #eee;
              height:100%;
              display: flex;
              align-items: center; 
              justify-content: center;
              font-size: $baseSize;
          }
          .tabFocus{
              background: $colorGreen;
              border-color: $colorGreen;
          }
          .headerImg{
            width:15%;
            float:left;
            height:100%;
            
          }
          .headerImg >img{
              width:100%;
              height:100%;
          }
          .headerUser{
              float: right;
              display: flex;
              height: 100%;
              
          }
          .headerUser >div{
              display: flex;
              align-items: center; 
              justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}

export default connect( mapStateToProps )(Header)