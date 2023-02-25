import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'Nav Nav'
    'Sidebar Content';
  transition: grid-template-columns 0.2s;
  grid-gap: 0.5rem;
  /* display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'Sidebar Content';
  transition: grid-template-columns 0.2s; */
`;

export const SidebarContainer = styled.div`
  grid-area: Sidebar;
`;

export const OutletContainer = styled.div`
  grid-area: Content;
`;
