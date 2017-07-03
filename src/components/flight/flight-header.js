import React       from 'react';
import { connect } from 'react-redux';
import PropTypes   from 'prop-types';


const FlightHeader = ({sourceCity, destCity, depDate, returnDate}) => {

    const header = (
        <div className="flight-header">
            <div className="flight-label">
                <h1> {`${sourceCity} > ${destCity} ${ returnDate ? ' > '+sourceCity : '' }`} </h1>
            </div>
            <div className="flight-timings">
                <p>Depart: {`${depDate}`} </p>
                { returnDate &&  <p>Arrive: {`${returnDate}`} </p> }
            </div>
        </div>
    );

    const headerPlaceHolder = (
        <div className="flight-header">
            <div className="flight-label">
                <h1> Your filght searches will be shown here. </h1>
                <br/>
                <p>A sample search data </p>
                <p>
                    Pune > Delhi
                </p>
                <p>
                    Depart: 2017-07-02
                </p>
            </div>
        </div>
    );

    return !sourceCity || !destCity ? headerPlaceHolder : header;
};

function mapStateToProps(state) {
    return {
        ...state.searchTerms
    };
}

export default connect(mapStateToProps)(FlightHeader);
