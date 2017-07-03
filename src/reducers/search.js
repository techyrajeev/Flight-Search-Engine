import * as types from '../actions/action-types';

const initialState = { data : [], filteredData : [] };

function getFlightPrice(flight) {
    const dep = flight.dep;
    const ret = flight.ret;
    return (dep ?  dep.travelCost:0) + (ret ?  ret.travelCost:0);
}

function filterSearchResults(data, filterParams) {
    const flightPrice = getFlightPrice(flight);
    return data.fliter((flight) => filterParams.minPrice <= flightPrice  && flightPrice <= filterParams.maxPrice );
}

function updateSearchResults(flights) {
    const departures = flights.departures || [];
    const returns    = flights.returns || [];

    return departures.length > 0
        ? departures
        .map((flight) => {
            let res =  [];
            if(returns.length > 0) {
                returns.forEach((retFlight) => {
                    res.concat({dep: flight, ret : retFlight});
                });
                return [...res];
            } else {
                return {dep: flight}
            }
        });
}

function search(state = initialState, action) {

  switch (action.type) {

    case types.UPDATE_SEARCH_RESULTS:
        return {
            ...state,
            data : updateSearchResults(action.flights),
            filteredData : []
        };

    case types.FILTER_SEARCH_RESULTS:
      return {
          ...state,
          filteredData : filterSearchResults(state.data)
      };

    default:
      return state;
    }
}

export default search;
