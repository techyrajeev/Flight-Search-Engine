import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

const TextField = ({ name, value, label, error, type, onChange}) => {
  return (
      <div className="text-field">
          <label>{label}</label>
          <input
              onChange    = {onChange}
              value       = {value}
              type        = {type}
              name        = {name}
          />
          {error && <span className="error">{error}</span>}
      </div>
  );
}

TextField.propTypes = {
  name     : PropTypes.string.isRequired,
  value    : PropTypes.string.isRequired,
  label    : PropTypes.string.isRequired,
  error    : PropTypes.string,
  type     : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField;
