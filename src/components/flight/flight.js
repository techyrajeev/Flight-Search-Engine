import React     from 'react';
import PropTypes from 'prop-types';
import FlightDetail from './flight-detail';
import FlightBook from './flight-book';
import Utlis     from '../../utils/utility';

export default class Flight extends React.Component {

    constructor(props) {
        super(props);
    }

    getFlightDetails() {
        return (
            <div>
                <h6>
                    AI-202
                </h6>
                <p>
                    PNQ > DEL
                </p>

                <p>
                    Depart: 10.00 AM
                    Arrive : 12.00 PM
                </p>
            </div>
        );
    }

    render() {
        return (
            <div className="fd-container">
                <div className="flight-detail">
                    <h2> Rs 9,500.00 </h2>
                    <div>
                        <FlightDetail />
                        <FlightDetail />
                    </div>
                </div>
                <FlightBook />
            </div>
        );
    }
}

//Planet.propType = {
    //type : PropTypes.string.isRequired,
    //title : PropTypes.string.isRequired,
    //content : PropTypes.string.isRequired
//};
