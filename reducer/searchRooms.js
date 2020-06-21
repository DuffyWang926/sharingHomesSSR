import {
  SEARCHROOMS_SUCCESS
} from '../actionTypes/searchRooms'
export const exampleInitialState = {
  roomList:['转租房','合租房','找室友','房源发布','租房信用']
}

function searchRoomsReducer (state = exampleInitialState, action) {
  switch (action.type) {
    case SEARCHROOMS_SUCCESS:
      let roomList = action.data && action.data.data
      return {
        ...state,
        roomList
      }

    default:
      return state
  }
}

export default searchRoomsReducer