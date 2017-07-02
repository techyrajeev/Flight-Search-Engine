import * as types from '../actions/action-types';

const initialState = { departures : [], returns : []};

function search(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_RESULTS:
      return {
          ...state,
          ...action.flights
      };

    default:
      return state;
    }
}

export default search;
