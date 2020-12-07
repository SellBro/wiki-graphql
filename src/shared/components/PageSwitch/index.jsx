import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { scrollTo } from 'shared/utils/helpers';

import { StyledButton, Input, PageCountContainer } from './styled';

const initInputState = {
  value: '',
  focused: false,
};

const PageSwitch = ({ allPages, page, setPage }) => {
  const [inputState, setInputState] = useState(initInputState);

  useEffect(() => {
    setInputState({ value: page, focused: false });
  }, [page]);

  const toggleButton = value => {
    scrollTo(0, 0);
    setPage(page + value);
  };

  const setCurrentPage = newPage => {
    if (page === newPage) {
      setInputState({ ...inputState, focused: false });
      return;
    }
    if (newPage >= 1 && newPage <= allPages) {
      scrollTo(0, 0);
      setPage(newPage);
    } else {
      setInputState(initInputState);
    }
  };

  const handleInputChange = e => {
    if (e.target.value.length > 2) return;
    const value = +e.target.value;
    if (!Number.isNaN(value)) {
      if (value === 0) {
        setInputState({ ...inputState, value: '' });
      } else {
        setInputState({ ...inputState, value });
      }
    }
  };

  const handleClick = event => {
    event.currentTarget.select();
  };

  const handleBlur = () => {
    setCurrentPage(+inputState.value);
  };

  const handleFocus = () => {
    setInputState({ ...inputState, focused: true });
  };

  const handleKeyPress = event => {
    const currentValue = +inputState.value;
    if (event.key === 'Enter' && currentValue > 0 && currentValue <= allPages) {
      setCurrentPage(currentValue);
    }
  };

  const isFirstPage = page === 1;
  const isLastPage = page === allPages;

  if (allPages <= 1) return null;

  return (
    <>
      <StyledButton icon="angle-left" disabled={isFirstPage} onClick={() => toggleButton(-1)} />
      <PageCountContainer>
        <Input
          isFocused={inputState.focused}
          value={inputState.focused ? inputState.value : `${inputState.value} of ${allPages}`}
          onFocus={handleFocus}
          onChange={handleInputChange}
          onClick={handleClick}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          inputMode="numeric"
        />
      </PageCountContainer>
      <StyledButton icon="angle-right" disabled={isLastPage} onClick={() => toggleButton(1)} />
    </>
  );
};

PageSwitch.propTypes = {
  allPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PageSwitch;
