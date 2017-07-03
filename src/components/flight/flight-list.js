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

        const data         = this.props.data || [];
        const filteredData = this.props.filteredData || [];

        return filteredData.length > 0
        ? filteredData.map((flight) => {
            return (
                <Flight {...flight} />
            );
        })
        : data.map((flight) => {
            return (
                <Flight {...flight} />
            );
        });
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
