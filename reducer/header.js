import {
  CHANGE_TAB,
  LOGIN_SUCCESS
} from '../actionTypes/header'
export const exampleInitialState = {
  tabKey: 0,
  user: {
    name:''
  },
  tabList:['转租房','合租房','找室友','房源发布','租房信用']
}

function headerReducer (state = exampleInitialState, action) {
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