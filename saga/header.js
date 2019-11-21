/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {  LOGIN } from '../actionTypes/header'
import { loginSuccess  } from '../actions/header'
import { failure } from '../actions/actions'
import {getUserData} from '../api/header'

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
const headerSaga = [
  loginSaga
]
export default headerSaga