import React        from 'react';
import FlightList   from './flight-list';
import FlightHeader from './flight-header';

const FlightPage = ({}) => {
    return (
        <div>
            <FlightHeader />
            <FlightList />
        </div>
    );
};

export default FlightPage;
