import styled from 'styled-components';

import { color } from 'shared/utils/styles';

export const SelectContainer = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  height: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  color: ${color.textPrimary};

  .react-select-container {
    height: 100%;
  }
  .react-select__no--options--message {
    color: red;
  }

  .react-select__control {
    height: 100%;
    background-color: ${color.orange};
    border: 1px solid ${color.selectionOrange};
    border-radius: 8px;
    box-shadow: none;
    color: ${color.textPrimary};
    cursor: text;
    transition: all 0.2s;

    &:focus {
      box-shadow: none;
    }
  }
  .react-select__control--is-focused {
    background-color: transparent;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__indicator {
    cursor: pointer;
    &:hover {
    }
  }
  .react-select__menu {
    color: ${color.textPrimary};
    background-color: ${color.orange};
    border-radius: 8px;
  }
  .react-select__option {
    &:first-of-type {
    }
    &:last-of-type {
    }
  }
  .react-select__option--is-selected {
  }
  .react-select__option--is-focused {
  }
  .react-select__input,
  .react-select__single-value {
    color: ${color.textPrimary};
    & input {
      margin-bottom: 0;
    }
  }
  .react-select__value-container {
    padding: 2px 12px;
    text-transform: capitalize;
  }
`;
