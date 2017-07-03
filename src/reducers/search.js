import * as types from '../actions/action-types';

const initialState = { data : [], filteredData : [], isFilterActive : false };

function getFlightPrice(flight) {
    const dep = flight.dep;
    const ret = flight.ret;
    return (dep ?  dep.travelCost:0) + (ret ?  ret.travelCost:0);
}

function filterSearchResults(data, filterParams) {
    return data.filter((flight) => {
        const flightPrice = getFlightPrice(flight);
        return filterParams.min <= flightPrice  && flightPrice <= filterParams.max;
    });
}

function updateSearchResults(flights) {
    const departures = flights.departures || [];
    const returns    = flights.returns || [];

    let result =  departures.map((flight) => {
        let res =  [];
        if(returns.length > 0) {
            returns.forEach((retFlight) => {
                res = res.concat([{dep: flight, ret : retFlight}]);
            });
            return res;
        } else {
            return [{dep: flight}]
        }
    });

    return [].concat(...result);
}

function search(state = initialState, action) {

  switch (action.type) {

    case types.UPDATE_SEARCH_RESULTS:
        return {
            ...state,
            isFilterActive : false,
            data           : updateSearchResults(action.flights),
            filteredData   : []
        };

    case types.FILTER_SEARCH_RESULTS:
      return {
          ...state,
          isFilterActive : true,
          filteredData   : filterSearchResults(state.data, action.filterParams)
      };

    default:
      return state;
    }
}

export default search;
