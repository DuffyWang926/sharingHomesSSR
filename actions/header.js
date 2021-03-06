
import {
  CHANGE_TAB,
  LOGIN,
  LOGIN_SUCCESS,
  TEST_NODE
} from '../actionTypes/header'

export function changeTab (data) {
  return {
    type: CHANGE_TAB,
    data
  }
}

export function login (data) {
  return {
    type: LOGIN,
    payload:data
  }
}

export function loginSuccess (data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export function testNode (data) {
  return {
    type: TEST_NODE,
    data
  }
}