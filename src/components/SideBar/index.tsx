import React from 'react';

import { NavLink } from 'react-router-dom';
import {
  MyLineStyle,
  MyPermIdentity,
  MyReceipt,
  MyTimeline,
  MyWork,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  SidebarMenu,
  SidebarTitle,
  SidebarWrapper,
} from './styles';
const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <NavLink to="/" title="Home">
              <SidebarListItem>
                <MyLineStyle />
                Home
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>All Menu</SidebarTitle>
          <SidebarList>
            <NavLink to="/users" title="Users">
              <SidebarListItem>
                <MyPermIdentity />
                Users
              </SidebarListItem>
            </NavLink>
            <NavLink to="/messages" title="Envio de mensagens SPB">
              <SidebarListItem>
                <MyTimeline />
                Messages
              </SidebarListItem>
            </NavLink>
            <NavLink to="/history" title="Histórico de mensages">
              <SidebarListItem>
                <MyReceipt />
                History
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Configurations</SidebarTitle>
          <SidebarList>
            <NavLink to="/configurations" title="Configuração">
              <SidebarListItem>
                <MyWork />
                Configurations
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default SideBar;