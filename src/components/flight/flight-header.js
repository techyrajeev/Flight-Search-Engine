import React        from 'react';

const FlightHeader = ({}) => {
    return (
        <div className="flight-header">
            <div>
                <h1> Pune > Delhi > Pune </h1>
            </div>
            <div>
                <p>Depart: 1 Jan 2017 </p>
                <p>Arrive: 10 Jan 2017 </p>
            </div>
        </div>
    );
};

export default FlightHeader;
