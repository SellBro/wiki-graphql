import styled from 'styled-components';

import { color, font, device } from 'shared/utils/styles';

export const StyledInput = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  appearance: none;
  transition: all 0.2s ease 0s;
  ${font.size(14)};
  color: ${color.textPrimary};
  background-color: ${color.background};
  border: 1px solid ${color.orange};

  @media ${device.laptop} {
    width: calc(25% - 11.25px);
  }
`;
