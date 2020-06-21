/* global fetch */

import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {  SEARCHROOMS } from '../actionTypes/searchRooms'
import { searchRoomsSuccess  } from '../actions/searchRooms'
import { failure } from '../actions/actions'
import {getRoomsData} from '../api/searchRooms'

es6promise.polyfill()


function * loadDataSaga (action) {
  const { payload } = action
  try {
    const {data} = yield call(getRoomsData(payload))

    yield put(searchRoomsSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loginSaga () {
  yield all([
    takeLatest(SEARCHROOMS, loadDataSaga)
  ])
}

const searchRoomsSaga = [
  loginSaga
]
export default searchRoomsSaga