import React       from 'react';
import Flight      from './flight';
import { connect } from 'react-redux';
import { v4 }      from 'uuid';
import PropTypes   from 'prop-types';

class FlightList extends React.Component {

    constructor(props) {
        super(props);
        this.generateFlightLists = this.generateFlightLists.bind(this);
    }

    generateFlightLists() {

        const data           = this.props.data || [];
        const filteredData   = this.props.filteredData || [];
        const isFilterActive = this.props.isFilterActive;

        return isFilterActive
        ? filteredData.map((flight) => {
            return (
                <Flight {...flight} key={v4()} />
            );
        })
        : data.map((flight) => {
            return (
                <Flight {...flight} key={v4()} />
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
