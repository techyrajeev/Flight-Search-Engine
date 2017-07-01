import React        from 'react';
import SimpleButton from '../common/simple-button';
import planImg      from '../../../img/airplane.jpg';

const FlightBook = ({}) => {
    return (
        <div className="flight-book">
            <img alt="Book flight" src={planImg} />
            <SimpleButton classNames="themebtn btn-cta-green" whenClicked={()=> { alert("Flight booked!") }}>
                Book this flight
            </SimpleButton>
        </div>
    );
};

export default FlightBook;
