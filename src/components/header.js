import React       from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <header>
               <nav>
                   <h2> <i className="material-icons md-36">flight_takeoff</i> Flight Search Engine </h2>
              </nav>
            </header>
        );
    }
}

