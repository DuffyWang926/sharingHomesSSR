/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {  MAP_CENTER } from '../actionTypes/details'
import { mapCenterSuccess  } from '../actions/details'
import { failure } from '../actions/actions'
import { getMapCenterData } from '../api/details'

es6promise.polyfill()


function * mapCenterDataSaga (action) {
  const { payload } = action
  try {
    const {data} = yield call(getMapCenterData(payload))

    yield put(mapCenterSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * mapCenterSaga () {
  yield all([
    takeLatest(MAP_CENTER, mapCenterDataSaga)
  ])
}

const detailsSaga = [
  mapCenterSaga,
  
]
export default detailsSaga