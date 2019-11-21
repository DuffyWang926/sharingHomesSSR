import {
  CHANGE_TAB,
  LOGIN_SUCCESS
} from '../actionTypes/header'
export const exampleInitialState = {
  tabKey: 0,
  user: {
    name:''
  },
  tabList:['browse catalog','quick upload','contract pricing']
}

function headerReducer (state = exampleInitialState, action) {
  console.log(action)
  debugger
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        ...{tabKey: action.data}
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...{user: action.data}
      }

    default:
      return state
  }
}

export default headerReducer