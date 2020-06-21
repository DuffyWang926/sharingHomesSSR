import {
  MAP_CENTER_SUCCESS,
} from '../actionTypes/details'
export const exampleInitialState = {
  mapCenterData:{}
 
}

function detailsReducer (state = exampleInitialState, action) {
  switch (action.type) {
    case MAP_CENTER_SUCCESS:
      let data = action && action.data
      const { pois } = data
      let location = Array.isArray(pois) && pois.length > 0 && pois[0].location.split(',')

      return {
        ...state,
        ...{mapCenterData: location}
      }

    default:
      return state
  }
}

export default detailsReducer