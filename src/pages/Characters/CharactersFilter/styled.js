import styled from 'styled-components';

import { color, device } from 'shared/utils/styles';

import { Button } from 'shared/components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 20px auto 20px auto;
  padding: 0 17.5px;

  input,
  .react-select-wrapper {
    width: 48%;
    margin-bottom: 15px;
  }

  button {
    width: 48%;
    margin-bottom: 15px;
  }

  @media ${device.mobileS} {
    margin: 15px auto 0 auto;
    padding: 0 10px;

    input,
    .react-select-wrapper {
      width: 100%;

      &:first-of-type {
        margin-right: auto;
      }
    }

    input[name='type'],
    input[name='name'],
    input[name='species'],
    .react-select-wrapper {
      height: 42px;
    }

    button {
      width: 100%;
      height: 42px;
      margin-bottom: 0;
    }
  }

  @media ${device.tablet} {
    margin-top: 30px;
  }

  @media ${device.laptop} {
    margin: 40px auto 0 auto;

    input,
    .react-select-wrapper {
      width: calc(25% - 11.25px);
    }

    button {
      width: calc(25% - 11.25px);
    }
  }
`;

export const ResetButton = styled(Button)`
  :hover {
    color: ${color.textPrimary};
    background-color: ${color.orange};
  }
`;
