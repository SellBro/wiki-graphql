import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import { SelectContainer } from './styled';

const Select = ({ color, size, fullWidth, filled, ...props }) => {
  return (
    <div className="react-select-wrapper">
      <SelectContainer filled={filled} color={color} size={size} fullWidth={fullWidth}>
        <ReactSelect {...props} className="react-select-container" classNamePrefix="react-select" />
      </SelectContainer>
    </div>
  );
};

Select.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  filled: PropTypes.bool,
};

Select.defaultProps = {
  color: undefined,
  size: undefined,
  fullWidth: true,
  filled: undefined,
};

export default Select;
