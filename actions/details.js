
import {
  MAP_CENTER,
  MAP_CENTER_SUCCESS,
  
} from '../actionTypes/details'



export function mapCenter (data) {
  return {
    type: MAP_CENTER,
    payload:data
  }
}

export function mapCenterSuccess (data) {
  return {
    type: MAP_CENTER_SUCCESS,
    data
  }
}

