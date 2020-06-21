import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'antd'
import _ from 'lodash';
import SearchProducts from './SearchProducts'
import SelectItems from './common/selectItems/selectItems'
import SortItems from './common/sortItems/sortItems'
import RoomList from './common/roomList/roomList'


const namespace = 'searchRooms'
const mapStateToProps = (state) => {
  return{
    ...state[namespace]
  }
};

class HouseChoose extends Component {

  constructor(){
    super()
    this.state={
      logInVisible:false
    }
  }
  
  getBtnRegionValue = (value) =>{
    console.log(value)
  }
  getSortType = (data) =>{
    console.log(data)
  }
  onRoomClick = (id) =>{
    console.log(id)
  }
  getInputData = (val) =>{
    console.log(val,'val')
  }

  render () {
    const { roomList = [] } = this.props
    let inputStyle ={
      display:"block",
      margin:"auto",
      width:"400px",
      height:"20px",
      borderRadius:"10px"
    }
    let region={
      title:'区域',
      btnList:['不限','西城','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',
      '一号线','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',],
      getBtnValue:this.getBtnRegionValue
    }
    let regionSubway={
      title:'地铁',
      btnList:['不限','一号线','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',
      '一号线','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',]
    }
    let subwayStation={
      title:'地铁站',
      btnList:['不限','苹果园','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',
      '一号线','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',]
    }

    let houseType={
      title:'类型',
      btnList:['不限','床','客厅','东卧','南卧','西卧','北卧']
    }
    
    let rentPrice={
      title:'租金',
      btnList:['不限','1000元以下','1000元-2000元','2000元-3000元','3000元-4000元','5000元以上']
    }
    let contractDate={
      title:'合同期限',
      btnList:['不限','三月内','三月-六月','六月-一年','一年以上']
    }
    let roomFurniture={
      title:'室内配套',
      btnList:['不限','桌子','椅子','衣柜','独立卫生间','床头柜'],
      isMutiple:true,
    }
    let houseFurniture={
      title:'公共配套',
      btnList:['不限','WiFi','洗衣机','燃气炉','公共卫生间','热水器','微波炉','电视'],
      isMutiple:true,
    }
    let ItemsList = [
      {
        title:'区域',
        name:'region',
        btnList:['不限','西城','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',
        '一号线','二号线','三号线','四号线','五号线','六号线','七号线','八号线','九号线','十号线','十一号线','十二号线',],
        getBtnValue:this.getBtnRegionValue
      }

    ]
    let selectItemsProps ={
      ItemsList
    }
    let sortList = [
      {
        title:'可信度',
        name:'reliablility',
        sortType:true,
      },
      {
        title:'价格',
        name:'price',
        sortType:true,
      },
      {
        title:'面积',
        name:'area',
        sortType:true,
      }
    ]
    let sortItemsProps = {
      sortList,
      getSortType:this.getSortType
    }
    // let roomListProps ={
    //   roomList:[
    //     {
    //       id:1,
    //       title:'阳光100-1室1厅-北',
    //       area:48,
    //       floor:3,
    //       floorTotal:33,
    //       location:'小区距离大望路站约400米',
    //       price:9390,
    //       labelList:['空调','独立卫生间','1990年建'],
    //     },
    //     {
    //       id:2,
    //       title:'阳光100-1室1厅-北',
    //       area:48,
    //       floor:3,
    //       floorTotal:33,
    //       location:'小区距离大望路站约400米',
    //       price:9390,
    //       labelList:['空调','独立卫生间','1990年建'],
    //     },
    //     {
    //       id:3,
    //       title:'阳光100-1室1厅-北',
    //       area:48,
    //       floor:3,
    //       floorTotal:33,
    //       location:'小区距离大望路站约400米',
    //       price:9390,
    //       labelList:['空调','独立卫生间','1990年建'],
    //     },
    //     {
    //       id:3,
    //       title:'阳光100-1室1厅-北',
    //       area:48,
    //       floor:3,
    //       floorTotal:33,
    //       location:'小区距离大望路站约400米',
    //       price:9390,
    //       labelList:['空调','独立卫生间','1990年建'],
    //     }
    //   ],
    //   onRoomClick:this.onRoomClick
    // }
    let roomListProps = {
      roomList
    }

   
    return (
      <div>
        <div className='search'>
          <SearchProducts />
        </div>
        <div>
          <SelectItems {...selectItemsProps}/>
        </div>
        <div>
          <SortItems {...sortItemsProps }/>
        </div>
          <RoomList {...roomListProps}/>
        
        <style jsx>{`
        
          
        `}</style>
      </div>
    )
  }
}

export default connect(mapStateToProps)(HouseChoose)