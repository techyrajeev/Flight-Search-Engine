import React                   from 'react';
import TextField               from '../common/text-field';
import QtySelector             from '../common/qty-selector';
import SpinButton              from '../common/spin-button';
import { connect }             from 'react-redux';
import { search }              from '../../actions/search-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
import PropTypes               from 'prop-types';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchParams : {
                sourceCity     : '',
                destCity       : '',
                depDate        : '',
                returnDate     : '',
                noOfPassengers : 1,
            },
            errors         : {},
            isLoading      : false
        };

        this.onChange           = this.onChange.bind(this);
        this.searchFlights      = this.searchFlights.bind(this);
        this.selectedPassengers = this.selectedPassengers.bind(this);
        this.resetFormState     = this.resetFormState.bind(this);
    }

    onChange(e) {
        const changes = {[e.target.name]: e.target.value};
        this.setState((prevState) => {
            return { searchParams  : {...prevState.searchParams , ...changes } };
        });
        //this.setState({
            //[e.target.name]: e.target.value
        //});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isOneWay != this.props.isOneWay) {
            this.resetFormState();
        }
    }

    resetFormState(){
        this.setState({
            searchParams : {
                sourceCity     : '',
                destCity       : '',
                depDate        : '',
                returnDate     : '',
                noOfPassengers : 1
            },
            errors         : {},
            isLoading      : false
        });
    }

    selectedPassengers(passengers) {
        this.setState((prevState) => {
            return { searchParams  : {...prevState.searchParams , selectedPassengers : passengers }};
        });
    }

    validateInput(searchParams) {
        let errors = {};

        Object.keys(searchParams)
            .filter((stateKey) => this.props.isOneWay && stateKey != 'returnDate')
            .forEach((stateKey) => {
            isEmpty(searchParams[stateKey]) ? (errors[stateKey] = `*required` ) : null;
        });

        return {
            errors,
            isValid : isEmptyObj(errors)
        };
    }

    isSearchValid() {
        const { errors, isValid } = this.validateInput(this.state.searchParams);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    searchFlights(e) {
        e.preventDefault();
        if (this.isSearchValid()) {
            this.setState({errors : {}, isLoading : true});

            this.props.search(this.state.searchParams)
                .then((res) => {
                    console.log(JSON.stringify(res));
                })
                .catch((err) => {
                    console.log(JSON.stringify(err));
                })
                .then((err) => {
                    this.setState({isLoading : false});
                });
        }
    }

    render() {
        const {sourceCity, destCity, depDate, returnDate} = this.state.searchParams;
        const { errors, isLoading } = this.state;

        return (
            <form onSubmit={this.searchFlights} className="search-form">

                <TextField
                    name     = "sourceCity"
                    label    = "Enter source City"
                    value    = {sourceCity}
                    error    = {errors.sourceCity}
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
                !this.props.isOneWay
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

SearchForm.propTypes = {
    search : PropTypes.func.isRequired
}

export default connect(null , { search })(SearchForm);
