import * as types from '../actions/action-types';

const initialState = {};

function searchTerms(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_TERMS:
      return {
          ...action.searchTerms
      };

    default:
      return state;
    }
}

export default searchTerms;
