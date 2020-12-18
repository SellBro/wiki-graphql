import styled from 'styled-components';

import { font, color, device } from 'shared/utils/styles';

export const StyledButton = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: ${({ large }) => (large ? '20px' : '10px')};
  border-radius: 8px;
  background-color: inherit;
  text-transform: capitalize;
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
  cursor: pointer;
  ${({ large }) => (large ? font.size(24) : font.size(14))};
  color: ${color.orange};
  border: 1px solid ${color.orange};

  :hover {
    color: ${({ active }) => (active ? color.textPrimary : '')};
    background-color: ${({ active }) => (active ? color.orange : '')};
  }

  @media ${device.laptop} {
    width: ${({ fullWidth }) => (!fullWidth ? 'calc(25% - 11.25px)' : '100%')};
  }
`;
