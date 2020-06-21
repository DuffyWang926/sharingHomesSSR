import headerSaga from './header'
import searchRoomsSaga from './searchRooms'
import detailsSaga from './details'




import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  for( let k of headerSaga){
    yield fork(k)
  }
  for( let k of searchRoomsSaga){
    yield fork(k)
  }
  for( let k of detailsSaga){
    yield fork(k)
  }
}