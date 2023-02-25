import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 4;
`;

export const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;

  background: ${({ theme }) => theme['gray-600']};
`;
