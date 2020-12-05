import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';

import { font, color } from 'shared/utils/styles';
import Normalize from './Normalize';

export const GlobalStyles = createGlobalStyle`

    *, *:after, *:before, input[type="search"] {
        box-sizing: border-box;
    }

    #root , html, body {
        height: 100%;
        margin: 0;
    }

    body {
        ${font.test};
        background-color: ${color.background};
        color: ${color.textPrimary};
    }

    ul {
        list-style: none;
    }

    *::selection {
        color: ${color.selectionOrange};
        background-color: ${color.selectionBlack}
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul, li, ol, dd, h1, h2,
    h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        ${font.primary}
    }

    [role="button"], button, input, select, textarea {
            outline: none;
        &:focus {
            outline: none;
        }
        &:disabled {
            opacity: 1;
        }
  }

`;

export const Theme = ({ children }) => {
  return (
    <SkeletonTheme color={color.skeletonMain} highlightColor={color.skeletonHighlight}>
      <GlobalStyles />
      <Normalize />
      {children}
    </SkeletonTheme>
  );
};
