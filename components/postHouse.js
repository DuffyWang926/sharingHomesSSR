import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input } from 'antd'
import _ from 'lodash';
import ItemList from './common/formItemList/itemList'

class PostHouse extends Component {

  constructor(){
    super()
    this.state={
      formData:{}
    }
    
  }
  
  onDataChange = (data) =>{
    const { formData } = this.state
    let temp = { ...formData, ...data}
    this.setState({
      formData:temp
    })

  }
  

  render () {
    
    let itemListProps = {
      itemList:[
        {
          title:'小区所在城市',
          name:'city',
          middle:'北京'
          
        },
        {
          type:'input',
          name:'subdistrict',
          title:'小区',
          placeholder:'请输入小区名字'
        },
        {
          type:'inputList',
          title:'房屋所在地址',
          dataList:[
            { 
              name:'buildingNo',
              placeholder:'楼栋号'
            },
            {
              name:'unitNo',
              placeholder:'单元号'
            },
            {
              name:'houseNo',
              placeholder:'门牌号'
            }
          ]
        },
        {
          type:'input',
          title:'租金',
          name:'rentPrice',
          placeholder:'请输入租金',
          end:'元/月'
        },
        {
          type:'select',
          title:'出租方式',
          name:'rentType',
          dataList:[
            {
              value:'转租',
              id:0
            },
            {
              value:'合租',
              id:1
            },
            {
              value:'整租',
              id:2
            },
          ]
          
        },
        {
          type:'input',
          title:'姓名',
          name:'name',
          placeholder:'请输入姓名',
          end:'元/月'
        },
        {
          type:'inputList',
          title:'联系方式',
          dataList:[
            {
              name:'weiXinNo',
              placeholder:'微信号'
            },
            {
              name:'qqNo',
              placeholder:'qq号'
            },
            {
              name:'phoneNo',
              placeholder:'手机号（不推荐）'
            }
          ]
        },


      ],
      onDataChange:this.onDataChange
    }
      

   
    return (
      <div >
        <ItemList {...itemListProps} />
      </div>
    )
  }
}

export default connect()(PostHouse)