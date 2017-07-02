import React       from 'react';
import Flight      from './flight';
import { connect } from 'react-redux';
import PropTypes   from 'prop-types';

class FlightList extends React.Component {

    constructor(props) {
        super(props);
        this.generateFlightLists = this.generateFlightLists.bind(this);
    }

    generateFlightLists() {
        const departures = this.props.departures || [];
        const returns    = this.props.returns || [];

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
                })
                .map((flight) => {
                    return (
                        <Flight {...flight} />
                    );
                })
        : null;
    }

    render() {
        return (
            <div>
                { this.generateFlightLists() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.search
    };
}

export default connect(mapStateToProps)(FlightList);
