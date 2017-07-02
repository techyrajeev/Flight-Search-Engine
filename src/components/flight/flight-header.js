import React        from 'react';

const FlightHeader = ({}) => {
    return (
        <div className="flight-header">
            <div className="flight-label">
                <h1> Pune > Delhi > Pune </h1>
            </div>
            <div className="flight-timings">
                <p>Depart: 1 Jan 2017 </p>
                <p>Arrive: 10 Jan 2017 </p>
            </div>
        </div>
    );
};

export default FlightHeader;
