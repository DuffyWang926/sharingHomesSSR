import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './mapDetail.css'
import { Map , Marker} from 'react-amap';
import { configList }  from '../../../constants/config'
import { mapCenter } from '../../../actions/details'


const namespace = 'details'
const mapStateToProps = (state) => {
  return{
    ...state[namespace]
  }
};

const  { MY_AMAP_KEY }  = configList
class MapDetail extends Component {

  constructor(props){
    super(props)
    this.state={
        
    }
  }

  componentDidMount(){
    this.props.dispatch(mapCenter({text:'map'}))

  }
  

  render () {
    return (
      <div className='mapDetail' >
         <Map amapkey={MY_AMAP_KEY} center={this.props.mapCenterData} zoom={18}>
           <Marker position={this.props.mapCenterData}  />
         </Map>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MapDetail)