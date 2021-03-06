import styled from 'styled-components';

import { device } from 'shared/utils/styles';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 20px auto 0 auto;
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
    margin-top: 15px;
    padding: 0 10px;

    input,
    .react-select-wrapper {
      width: 100%;
    }

    .react-select-wrapper {
      height: 42px;
    }

    button {
      width: 100%;
      margin-bottom: 0;
    }
  }

  @media ${device.laptop} {
    justify-content: space-around;
    margin: 40px auto 0 auto;

    input,
    .react-select-wrapper {
      width: calc(25% - 11.25px);
      margin-right: 15px;
      margin-bottom: 0;
    }

    button {
      width: calc(25% - 11.25px);
      margin-bottom: 0;
    }
  }
`;
