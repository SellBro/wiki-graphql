import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const SelectContainer = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  height: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  color: ${color.textPrimary};
  ${font.size(14)};

  .react-select-container {
    height: 100%;
  }
  .react-select__no--options--message {
    color: red;
  }

  .react-select__control {
    height: 100%;
    border: 1px solid ${color.selectionOrange};
    border-radius: 8px;
    box-shadow: none;
    cursor: text;
    transition: all 0.2s;
    background-color: transparent;
    color: ${color.textPrimary};
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
      background-color: ${color.orange};
    }
  }
  .react-select__menu {
    color: ${color.textPrimary};
    background-color: ${color.orange};
    border-radius: 8px;
  }
  .react-select__option {
    &:first-of-type {
      border-top-left-radius: calc(8px / 1.5);
      border-top-right-radius: calc(8px / 1.5);
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
