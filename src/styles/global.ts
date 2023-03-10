import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
/*  
  :focus {
    outline: 0;
    box-shadow:  0 0 0 1px ${({ theme }) => theme['green-500']};
  } */

  body {
    background: ${({ theme }) => theme.colors.gray1};
    color: ${({ theme }) => theme.colors.gray11};
    -webkit-font-smoothing: antialiased;
  }

  body , input , textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
