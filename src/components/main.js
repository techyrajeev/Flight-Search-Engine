import React            from 'react';
import Header           from './header';
import SearchPage       from './search/search-page';
import FlightPage       from './flight/flight-page';
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
                       <SearchPage />
                   </aside>
                    <section id="content">
                        <FlightPage />
                    </section>
                   <Footer />
               </div>
        );
    }
}
