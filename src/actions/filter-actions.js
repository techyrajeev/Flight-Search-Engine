import { FILTER_SEARCH_RESULTS }  from './action-types';

export function filterSearchResults(filterParams) {
    return {
        type : FILTER_SEARCH_RESULTS,
        filterParams
    };
}

export function filter(filterParams) {
    return dispatch => { dispatch(filterSearchResults(filterParams)); };
}
