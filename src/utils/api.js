import 'isomorphic-fetch';
import data             from './flights.json';
import { compareDate }  from './utility';

function sendPostRequest(URL, dataToSend, customHeaders = null) {
    let headers  = {
        'Content-Type' : 'application/json',
    };

    if (customHeaders) {
        headers = customHeaders;
    }

    return fetch(URL, {
        method      : 'POST',
        headers     : headers,
        body        : JSON.stringify(dataToSend)
    })
    .then(checkResponseStatus)
    .then(parseJSON);
}

function checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

function searchFlights(flights, searchedDepDate, sourceCity, destCity) {

    let departures = [];
    let others     = [];

    flights.forEach((flight) => {
        const depDate = new Date(flight.scheduledDeparture);

        if(!compareDate(searchedDepDate, depDate)){
            others = others.concat(flight);
            return;
        }

        if((flight.sourceCity.toUpperCase() !== sourceCity.toUpperCase())
            && (flight.sourceAirportId.toUpperCase() !== sourceCity.toUpperCase())){
            others = others.concat(flight);
            return;
        }

        if((flight.destCity.toUpperCase() !== destCity.toUpperCase())
            && (flight.destAirportId.toUpperCase() !== destCity.toUpperCase())){
            others = others.concat(flight);
            return;
        }

        departures = departures.concat(flight);
    });

    return { departures, others };
}

module.exports =  {

    search(searchParams) {
        return new Promise((resolve, reject) => {
            const searchedDepDate    = new Date(searchParams.depDate);
            const searchedRetDate    = new Date(searchParams.returnDate);
            const searchedSourceCity = searchParams.sourceCity;
            const searchedDestCity   = searchParams.destCity;

            const finalResult = { departures : [], returns : [] };

            let searchResults = searchFlights(data.flights, searchedDepDate, searchedSourceCity, searchedDestCity);

            finalResult.departures = searchResults.departures;

            if(searchParams.returnDate) {
                finalResult.returns = searchFlights(searchResults.others, searchedRetDate, searchedDestCity, searchedSourceCity).departures;
            }
            resolve(finalResult);
        });
    },

    getFlights() {
        return data.flights;
    }
};


