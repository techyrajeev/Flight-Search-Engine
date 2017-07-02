import React           from 'react';
import { dateToHours } from '../../utils/utility';

const FlightDetail = ({airlineId, sourceAirportId, destAirportId,
    scheduledDeparture, scheduledArrival}) => {
    return (
        <div className="flight-schedule">
            <h6>
                {airlineId}
            </h6>
            <p>
                { `${sourceAirportId } > ${destAirportId}` }
            </p>
            <p>
                { `Depart: ${dateToHours(scheduledDeparture)}` }
            </p>

            <p>
                {`Arrive: ${dateToHours(scheduledArrival)}`}
            </p>

        </div>
    );
};

export default FlightDetail;
