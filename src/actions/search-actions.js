import Api from '../utils/api';
import { UPDATE_SEARCH_RESULTS, UPDATE_SEARCH_TERMS }  from './action-types';

export function updateSearchResults(flights) {
    return {
        type : UPDATE_SEARCH_RESULTS,
        flights
    };
}

export function updateSearchTerms(searchTerms) {
    return {
        type : UPDATE_SEARCH_TERMS,
        searchTerms
    };
}


export function search(searchParams) {
    return dispatch => {
        return Api.search(searchParams)
            .then( res => {
                dispatch(updateSearchTerms(searchParams));
                dispatch(updateSearchResults(res));
            });
    };
}
