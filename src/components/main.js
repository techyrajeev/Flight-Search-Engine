import React            from 'react';
import Header           from './header';
import FlightsContainer from './flight/flights-container';
import FlightHeader     from './flight/flight-header';
import SearchBox        from './search/search-box';
import Footer           from './footer';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
               <div id="fse_container">
                   <Header />
                   <aside  id="sidebar">
                       <SearchBox />
                   </aside>
                    <section id="content">
                        <FlightHeader />
                        <FlightsContainer />
                    </section>
                   <Footer />
               </div>
        );
    }
}
