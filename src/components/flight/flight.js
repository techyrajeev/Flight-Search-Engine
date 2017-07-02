import React        from 'react';
import PropTypes    from 'prop-types';
import FlightDetail from './flight-detail';
import FlightBook   from './flight-book';

export default class Flight extends React.Component {

    getFlightPrice() {
        const dep = this.props.dep;
        const ret = this.props.ret;
        return `Rs. ${(dep ?  dep.travelCost:0) + (ret ?  ret.travelCost:0)}`;
    }

    getFlightDetails() {
        const dep = this.props.dep;
        const ret = this.props.ret;
        return (
            <div>
                { dep ? <FlightDetail {...dep} /> : null }
                { ret ? <FlightDetail {...ret} /> : null }
            </div>
        );
    }

    render() {
        return (
            <div className="fd-container">
                <div className="flight-detail">
                    <h2>{this.getFlightPrice()} </h2>
                    {this.getFlightDetails()}
                </div>
                <FlightBook />
            </div>
        );
    }
}

