/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {  LOGIN, TEST_NODE } from '../actionTypes/header'
import { loginSuccess  } from '../actions/header'
import { failure } from '../actions/actions'
import {getUserData, getNodeData} from '../api/header'

es6promise.polyfill()


function * loadDataSaga (action) {
  const { payload } = action
  try {
    const {data} = yield call(getUserData(payload))

    yield put(loginSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * loginSaga () {
  yield all([
    takeLatest(LOGIN, loadDataSaga)
  ])
}

function * loadNodeSaga (action) {
  const { payload } = action
  try {
    const {data} = yield call(getNodeData(payload))

    yield put(loginSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * nodeSaga () {
  yield all([
    takeLatest(TEST_NODE, loadNodeSaga)
  ])
}
const headerSaga = [
  loginSaga,
  nodeSaga
]
export default headerSaga