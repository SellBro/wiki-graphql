import React from 'react';

import { useCharacterContext } from 'context';
import { scrollTo } from 'shared/utils/helpers';

import { Button, Input, PageCountContainer } from './styled';

const PageSwitch = ({ allPages, page }) => {
  const { dispatch } = useCharacterContext();

  const toggleButton = e => {
    const { name } = e.target;

    scrollTo(0, 0);

    dispatch({ type: name });
  };

  const isFirstPage = page === 1;
  const isLastPage = page === allPages;

  return (
    <>
      <Button name="prevPage" disabled={isFirstPage} onClick={toggleButton}>
        {'<'}
      </Button>
      <PageCountContainer>
        <Input value={`${page} of ${allPages}`} inputMode="numeric" />
      </PageCountContainer>
      <Button name="nextPage" disabled={isLastPage} onClick={toggleButton}>
        {'>'}
      </Button>
    </>
  );
};

export default PageSwitch;
