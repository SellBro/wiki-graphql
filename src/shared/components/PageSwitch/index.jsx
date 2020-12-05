import React, { useEffect, useState } from 'react';

import { useCharacterContext } from 'context';
import { scrollTo } from 'shared/utils/helpers';

import { Icon } from '..';

import { Button, Input, PageCountContainer } from './styled';

const initInputState = {
  value: '',
  focused: false,
};

const PageSwitch = ({ allPages, page }) => {
  const [inputState, setInputState] = useState(initInputState);

  const { dispatch } = useCharacterContext();

  useEffect(() => {
    setInputState({ value: page, focused: false });
  }, [page]);

  const toggleButton = e => {
    const { name } = e.target;

    scrollTo(0, 0);

    dispatch({ type: name });
  };

  const setCurrentPage = newPage => {
    if (page === newPage) {
      setInputState({ ...inputState, focused: false });
      return;
    }
    if (newPage >= 1 && newPage <= allPages) {
      scrollTo(0, 0);
      dispatch({ type: 'setPage', payload: newPage });
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
      <Button name="prevPage" disabled={isFirstPage} onClick={toggleButton}>
        <Icon type="angle-left" size={40} />
      </Button>
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
      <Button name="nextPage" disabled={isLastPage} onClick={toggleButton}>
        <Icon type="angle-right" size={40} />
      </Button>
    </>
  );
};

export default PageSwitch;
