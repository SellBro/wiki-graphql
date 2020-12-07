import styled from 'styled-components';

import { font, color } from 'shared/utils/styles';

import Button from '../Button';

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 15px 0;
  border: none;
  text-transform: uppercase;
  transform: scale(1);
  transition: background-color 0.2s, transform 0.1s;
  cursor: pointer;
  border-radius: 8px;
  ${font.size(50)};
  color: ${color.textPrimary};
  background-color: ${props => (props.disabled ? color.header : color.orange)};

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const PageCountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  transition: background-color 0.2s;
`;

export const Input = styled.input`
  height: 100%;
  text-align: center;
  overflow: hidden;
  background-color: transparent;
  border: none;
  ${font.size(50)};
  color: ${color.textPrimary};

  &:focus {
    outline: none;
  }
`;
