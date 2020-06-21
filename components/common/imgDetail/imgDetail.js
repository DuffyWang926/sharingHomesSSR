import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Input, Button } from 'antd'
import _ from 'lodash';
import './imgDetail.css'
import SortItem from '../sortItem/sortItem'
import { Carousel } from 'antd';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class ImgDetail extends Component {

  constructor(props){
    super(props)
    this.state={
        newlist:[0,1,2,3,4,5,6]
    }
  }

  componentDidMount() {
    var thumbsSwiper = new Swiper('#thumbs',{
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesVisibility: true,//防止不可点击
    })
    var gallerySwiper = new Swiper('#gallery',{
      spaceBetween: 10,
      thumbs: {
        swiper: thumbsSwiper,
      }
    })
}

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  

  render () {
    
    
    return (
      <div className='imgDetail' >
         <div id="gallery" className="swiper-container" >
            <div className="swiper-wrapper">
              <div className="swiper-slide">a</div>
              <div className="swiper-slide">b</div>
              <div className="swiper-slide">c</div>
              <div className="swiper-slide">d</div>
            </div>
            <div className="swiper-button-prev swiper-button-white"></div>
            <div className="swiper-button-next swiper-button-white"></div>
          </div>
        
          <div id="thumbs" className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">1</div>
              <div className="swiper-slide">2</div>
              <div className="swiper-slide">3</div>
              <div className="swiper-slide">4</div>
            </div>
          </div>
        
      </div>
    )
  }
}

export default connect()(ImgDetail)