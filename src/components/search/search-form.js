import React                   from 'react';
import TextField               from '../common/text-field';
import QtySelector             from '../common/qty-selector';
import SpinButton              from '../common/spin-button';
//import { connect }             from 'react-redux';
//import { search }              from '../../actions/search-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
//import PropTypes               from 'prop-types';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            originCity     : '',
            destCity       : '',
            depDate        : '',
            returnDate     : '',
            noOfPassengers : 0,
            errors         : {},
            isLoading      : false
        };

        this.onChange           = this.onChange.bind(this);
        this.searchFlights      = this.searchFlights.bind(this);
        this.selectedPassengers = this.selectedPassengers.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //componentDidUpdate() {
        //this.props.search(this.state.searchTerm)
            //.then((res) => console.log(res));
        //console.log("Comp updated:"+this.state.searchTerm);
    //}
    //

    selectedPassengers(passengers) {
        this.setState({selectedPassengers : passengers});
    }

    validateInput(state) {
        let errors = {};

        Object.keys(state).forEach((stateKey) => {
            isEmpty(state[stateKey]) ? (errors[stateKey] = `*required` ) : null;
        });

        return {
            errors,
            isValid : isEmptyObj(errors)
        };
    }

    isSearchValid() {
        const { errors, isValid } = this.validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    searchFlights(e) {
        e.preventDefault();
        if (this.isSearchValid()) {
            this.setState({errors : {}, isLoading : true});

            this.props.login(this.state)
                .then((res) => {
                    this.context.router.push('search');
                })
                .catch((err) => {
                    return err.response.json();
                })
                .then((err) => {
                    this.setState({errors : err, isLoading : false});
                });
        }
    }

    render() {
        const { errors, originCity, destCity, depDate, returnDate, isLoading } = this.state;
        return (
            <form onSubmit={this.searchFlights} className="search-form">
                {
                    errors.errorDesc
                        &&
                    <div className="alert alert-danger">
                        <a href="#" className="close"
                            data-dismiss="alert"
                            aria-label="close"
                        >
                            &times;
                        </a>
                        {errors.errorDesc}
                    </div>
                }

                <TextField
                    name     = "originCity"
                    label    = "Enter Origin City"
                    value    = {originCity}
                    error    = {errors.originCity}
                    onChange = {this.onChange}
                />

                <TextField
                    name     = "destCity"
                    label    = "Enter Destination City"
                    value    = {destCity}
                    error    = {errors.destCity}
                    onChange = {this.onChange}
                />

                <TextField
                    name     = "depDate"
                    label    = "Departure date"
                    value    = {depDate}
                    error    = {errors.depDate}
                    onChange = {this.onChange}
                    type     = "date"
                />

            {
                this.props.isOneWay
                    ?
                        <TextField
                            name     = "returnDate"
                            label    = "Return date"
                            value    = {returnDate}
                            error    = {errors.returnDate}
                            onChange = {this.onChange}
                            type     = "date"
                        />
                    :null
            }

                <QtySelector label="Passengers" callbackParent={this.selectedPassengers} />

                <SpinButton
                    classNames  = "themebtn btn-cta-green"
                    buttonText  = {"Search"}
                    spinText    = {"Searching flights..."}
                    showSpinner = {isLoading}
                    inputType   = "submit"
                />
            </form>
        );
    }
}

//SearchForm.propTypes = {
    //search : PropTypes.func.isRequired
//}

export default SearchForm;
//export default connect(null , { search })(SearchForm);
