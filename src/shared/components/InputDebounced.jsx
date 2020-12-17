import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import Input from './Input';

const InputDebounced = ({ onChange, value: propsValue, ...props }) => {
  const [value, setValue] = useState(propsValue);
  const isControlled = propsValue !== undefined;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce(newValue => {
      onChange(newValue);
    }, 500),
    [],
  );

  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    if (propsValue !== valueRef.current) {
      setValue(propsValue);
    }
  }, [propsValue]);

  return (
    <Input
      autoComplete="off"
      value={isControlled ? value : undefined}
      onChange={newValue => {
        setValue(newValue);
        handleChange(newValue);
      }}
      {...props}
    />
  );
};

InputDebounced.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

InputDebounced.defaultProps = {
  value: undefined,
};

export default InputDebounced;
