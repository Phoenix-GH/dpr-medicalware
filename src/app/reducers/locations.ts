import {
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_FAILURE
} from 'app/constants/actionTypes';

const initialState = {
  data: []
}

const actionMappings = {
  [GET_LOCATIONS_SUCCESS]: '_getLocationsSuccess',
  [GET_LOCATIONS_FAILURE]: '_getLocationsFailure'
}

const reducer = {
  _getLocationsSuccess(state, { locations }) {
    return {
      ...state,
      data: locations
    };
  },

  _getLocationsFailure(state, { err }) {
    return {
      ...state
    };
  }
}

const locationsReducer = (state = initialState, action) => {
  const method = actionMappings[action.type];
  return method ? reducer[method].call(null, state, action) : state;
};

export default locationsReducer;
