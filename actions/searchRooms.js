
import {
  SEARCHROOMS,
  SEARCHROOMS_SUCCESS,
} from '../actionTypes/searchRooms'

export function searchRooms (data) {
  console.log(data,'searchRooms action')
  return {
    type: SEARCHROOMS,
    payload:data
  }
}

export function searchRoomsSuccess (data) {
  console.log(data,'action searchRoomsSuccess')
  return {
    type: SEARCHROOMS_SUCCESS,
    data
  }
}
