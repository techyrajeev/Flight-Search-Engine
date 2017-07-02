import React        from 'react';
import SimpleButton from '../common/simple-button';
import SearchForm   from './search-form';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOneWay : true
        };
    }

    changeToOneWay = () => {
        this.setState({ isOneWay : true });
    }

    changeToTwoWay = () => {
        this.setState({ isOneWay : false });
    }

    render() {
        let classesOneWay = `themebtn btn-journey-type ${this.state.isOneWay ? 'active':''}`;
        let classesTwoWay = `themebtn btn-journey-type ${!this.state.isOneWay ? 'active':''}`;
        return (
            <div className="search-box">
                <SimpleButton
                    classNames  = {classesOneWay}
                    whenClicked = {this.changeToOneWay}
                >
                    One way
                </SimpleButton>
                <SimpleButton
                    classNames  = {classesTwoWay}
                    whenClicked = {this.changeToTwoWay}
                >
                    Return
                </SimpleButton>
                <SearchForm isOneWay={this.state.isOneWay} />
            </div>
        );
    }
}


export default SearchBox;
