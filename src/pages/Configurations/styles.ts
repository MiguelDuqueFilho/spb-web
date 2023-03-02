import styled from 'styled-components';

export const ConfigurationContainer = styled.main`
  flex: 1;
  padding: 0.3rem 1rem;

  width: 100%;

  /* max-height: 100vh; */
  height: 100%;

  h1 {
    font-size: 1.2rem;
    /* color: ${({ theme }) => theme['gray-100']}; */
    color: ${({ theme }) => theme.colors.gray12};
  }
`;

export const ConfigurationSection = styled.div`
  flex: 1;
  margin: 0.5rem;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
  padding: 0.5rem;
  width: 100%;

  span {
    display: block;
    font-size: 1rem;
    margin: 0 0.5rem;
    padding: 1rem 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gray4};
    text-overflow: ellipsis;
  }
`;

export const ConfigurationListService = styled.div`
  background: ${({ theme }) => theme.colors.gray4};
  border-radius: 8px;
  margin-top: 0.7rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  /* max-height: calc(55vh); */
`;

export const Action = styled.button`
  background-color: ${({ theme }) => theme.colors.gray9};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-900']};

  width: 100%;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :hover:enabled {
    opacity: 1;
  }

  svg {
    padding-top: 3px;
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.gray10};
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.gray12};
  font-size: 1rem;
  line-height: 1.6rem;
`;

export const SpanCount = styled.span`
  color: ${({ theme }) => theme.colors.gray12};
  font-size: 0.7rem;
  padding-top: 3px;
  margin-left: 2px;
`;

export const ConfigurationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
