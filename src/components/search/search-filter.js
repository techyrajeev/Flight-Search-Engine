import React                   from 'react';
import InputRange              from 'react-input-range';
import { connect }             from 'react-redux';
import { filter }              from '../../actions/filter-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
import PropTypes               from 'prop-types';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceRange : {
                min: 1000,
                max: 20000
            }
        };
    }

    startFiltering = (value) => {
        this.props.filter(value);
    }

    render() {
        return (
            <div className="search-filter">
                <h4> Refine flight search </h4>
                <br/>
                <InputRange
                    maxValue         = {30000}
                    minValue         = {0}
                    formatLabel      = {value => `${value}`}
                    value            = {this.state.priceRange}
                    onChange         = {value => this.setState({ priceRange : value })}
                    onChangeComplete = {this.startFiltering}
                />
                <br/>
            </div>
        );
    }
}

SearchFilter.propTypes = {
    filter : PropTypes.func.isRequired
}

export default connect(null , { filter })(SearchFilter);

