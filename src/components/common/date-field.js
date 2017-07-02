import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

export default class DateField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onDateFocus = () => {
        this.dateField.type = 'date';
    }

    onDateBlur = () => {
        this.dateField.type = 'text';
    }

    render() {
        const { name, value, label, error, type, onChange} = this.props;
        return (
            <div className={classnames('form-group', { 'has-error': error })}>
                <input
                    onChange    = {onChange}
                    placeholder = {label}
                    value       = {value}
                    type        = {type}
                    name        = {name}
                    className   = "date-input"
                    type        = "text"
                    ref         = {(date) => {this.dateField=date;}}
                    onBlur      = {this.onDateBlur}
                    onFocus     = {this.onDateFocus}
                />
                {error && <span className="help-block">{error}</span>}
            </div>
        );
    }
}

DateField.propTypes = {
  name     : PropTypes.string.isRequired,
  value    : PropTypes.string.isRequired,
  label    : PropTypes.string.isRequired,
  error    : PropTypes.string,
  type     : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
}

DateField.defaultProps = {
  type: 'text'
}
